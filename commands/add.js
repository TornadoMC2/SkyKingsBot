const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  
  let denied = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle(":negative_squared_cross_mark: You can't do that here")
  
  if(message.channel.name !== "waiting-list") return message.channel.send(denied)
  
  db.push(`queue`, args[0])
  
  let queue = null
  let fetchedQueue = await db.fetch(`queue`)
  if(fetchedQueue === null) fetchedQueue = queue
  else queue = fetchedQueue
  
  console.log(queue)

  let people = ''
  queue.forEach(writePeople)
  function writePeople(value, index) {
    people += `**[${(index)+1}]:** \`${queue[index]}\`\n`
  }

  let queueMessage = new Discord.RichEmbed()
  .setColor("GREY")
  .addField(`**Guild Waiting List**`, people)
    
  message.channel.bulkDelete(2)
  message.channel.send(queueMessage)
  
}
const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  
  let denied = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle(":negative_squared_cross_mark: You can't do that here")
  
  if(message.channel.name !== "waiting-list") return message.channel.send(denied)
  
  let queue = null
  let fetchedQueue = await db.fetch(`queue`)
  if(fetchedQueue === null) fetchedQueue = queue
  else queue = fetchedQueue 
  
  db.set(`queue`, queue.filter(r => r !== queue[0]))
  
  fetchedQueue = await db.fetch(`queue`)
  queue = fetchedQueue
  
  let success = new Discord.RichEmbed()
  .setColor("GREEN")
  .addField("Action Complete", ":white_check_mark: Queue Updated")
  
  message.channel.send(success).then((msg => {
    message.channel.bulkDelete(3)
    let people = ''
    queue.forEach(writePeople)
    function writePeople(value, index) {
      people += `**[${(index)+1}]:** \`${queue[index]}\`\n`
    }
    
    let clearedQueue = new Discord.RichEmbed()
    .setColor("GREY")
    .addField(`**Guild Waiting List**`, `**EMPTY**`)
    
    if(queue.length >= 1) {
      let queueMessage = new Discord.RichEmbed()
      .setColor("GREY")
      .addField(`**Guild Waiting List**`, people)
      message.channel.send(queueMessage)
    } else {
      message.channel.send(clearedQueue)
    }
  }))
  
  
}
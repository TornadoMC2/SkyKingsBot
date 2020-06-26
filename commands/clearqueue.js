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
  
  db.delete(`queue`)
  
  let success = new Discord.RichEmbed()
  .setColor("GREEN")
  .addField("Action Complete", ":white_check_mark: Queue Cleared")
  
  let clearedQueue = new Discord.RichEmbed()
  .setColor("GREY")
  .addField(`**Guild Waiting List**`, `**EMPTY**`)
  
  message.channel.send(success).then((msg => {
    message.channel.bulkDelete(5)
    message.channel.send(clearedQueue)
  }))
  
}
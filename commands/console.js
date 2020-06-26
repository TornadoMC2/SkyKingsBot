const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  let queue = null
  let fetchedQueue = await db.fetch(`queue`)
  if(fetchedQueue === null) fetchedQueue = queue
  else queue = fetchedQueue  
  
  console.log(queue)
  message.channel.bulkDelete(1)
  
}
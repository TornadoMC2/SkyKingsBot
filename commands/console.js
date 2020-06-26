const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd, clientMC) => {
  let queue = null
  let fetchedQueue = await db.fetch(`queue`)
  if(fetchedQueue === null) fetchedQueue = queue
  else queue = fetchedQueue  
  
  console.log(queue)
  message.channel.bulkDelete(1)
  
  clientMC.getPlayer('name', args[0]).then((player) => {
    //console.log(player)
    
  })
  
  clientMC.getSkyblockProfiles('name', args[0]).then((player) => {
    clientMC.getSkyblockProfileData(player.profiles[2].profile_id).then((profile) => {
      console.log(profile)
    })
  })
  
}
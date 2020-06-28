const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd, clientMC, skyblockClient) => {
  /*let queue = null
  let fetchedQueue = await db.fetch(`queue`)
  if(fetchedQueue === null) fetchedQueue = queue
  else queue = fetchedQueue  
  
  console.log(queue)*/
  
  let uuid;
  
  message.channel.bulkDelete(1)
  skyblockClient.getPlayer(message.member.displayName).then(async (player) => {
    uuid = player.uuid
      skyblockClient.getSkyblockProfiles(uuid).then(async (profiles) => {
        for(var i = 0; i < profiles[0].members.length; i++) {
          if(profiles[0].members[i].skills !== null) {
            console.log(profiles[0].members[i].skills)
          }
        }
      })
  })
  
}
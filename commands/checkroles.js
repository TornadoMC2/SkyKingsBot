const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd, clientMC, skyblockClient) => {
  
  let uuid
  
  skyblockClient.getPlayer(args[0]).then(async (player) => {
      uuid = player.uuid
      skyblockClient.getSkyblockProfiles(uuid).then(async (profiles) => {
        if(!profiles) return;
        //console.log(profiles); 

        console.log(profiles[0]/*.members[0].skills*/)
        
        
 
      }).catch(e => {
        console.log(e)
        /*
        if player does not have skyblock profiles -> Player does not have Skyblock profiles
        if specified UUID is not valid -> Malformed UUID
        */
      })
  })
  
  
}
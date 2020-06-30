const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd, clientMC, skyblockClient) => {
  /*let queue = null
  let fetchedQueue = await db.fetch(`queue`)
  if(fetchedQueue === null) fetchedQueue = queue
  else queue = fetchedQueue  
  
  console.log(queue)*/
  
  let uuid;
  let profileID;
  let zombieLevel4, spiderLevel4, wolfLevel4, 
      zombieLevel5, spiderLevel5, wolfLevel5, 
      zombieLevel6, spiderLevel6, wolfLevel6, 
      zombieLevel7, spiderLevel7, wolfLevel7, 
      zombieLevel8, spiderLevel8, wolfLevel8;
  
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
    return x;
  }
  
  
  message.channel.bulkDelete(1)
  await skyblockClient.getPlayer(message.member.displayName).then(async (player) => {
    uuid = player.uuid
      await skyblockClient.getSkyblockProfiles(uuid).then(async (profiles) => {
        profileID = profiles[0].profileId
        clientMC.getSkyblockProfileData(profileID).then(async (profile) => {
          zombieLevel4 = profile.profile.members[`${uuid}`].slayer_bosses.zombie.claimed_levels.hasOwnProperty('level_2')
          console.log(profile.profile.members[`${uuid}`].slayer_bosses.zombie.claimed_levels)
          console.log("zomb level 4: " + zombieLevel4)
          console.log(profile.profile.members[`${uuid}`].slayer_bosses.spider.claimed_levels)
          console.log(profile.profile.members[`${uuid}`].slayer_bosses.wolf.claimed_levels)
          console.log(profile.profile)
          for(var i = 0; i < profiles[0].members.length; i++) {
            //if(profile.profile.members[i].slayer_bosses !== null) {
              //console.log(profile.profile)
            //}
          }
          console.log(numberWithCommas(Math.round(profile.profile.banking.balance)))
        })
      })
  }).catch(console.error)
  
  
}
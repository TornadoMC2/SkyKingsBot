const db = require("quick.db")
const Discord = require('discord.js')
const Hypixel = require('hypixel-api')
exports.run = async  (message, client, args, cmd, clientMC) => {
  
  let userID = message.author.tag
  let userMention = message.author.id
  
  var discordHypixel
  let verified = message.guild.roles.find(role => role.name === "Verified")
  
  if(message.member.roles.has(verified.id)) {
    //message.member.setNickname(`UNLINKED`)
    message.member.removeRole(verified)
    message.channel.send(`**:white_check_mark: |** <@${userMention}>, your account has been unlinked succesfully`)
    
  } else {
    message.channel.send(`**:no_entry: |** <@${userMention}>, you must link your account before you can unlink it`)
  }
  
}
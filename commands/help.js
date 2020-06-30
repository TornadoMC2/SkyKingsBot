const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  
   let helpMessage = new Discord.RichEmbed()
   .setColor("PURPLE")
   .setTitle(`**SkyKings Bot Help Menu**`)
   .addField("General Commands", `q!help - shows this menu\nq!verify/link [username] - Link your minecraft to our discord server\nq!unlink - unlink your minecraft from our discord\nq!verifyhelp/q!linkhelp - shows the verification help menu`)
   .addField("Queue Commands", `q!add [username] - adds [username] to the waiting list\nq!move - moves the waiting line up one spot\nq!remove [place] - will remove the user from the [place] specified\nq!clearqueue - clears the queue`)
   .addField("Role Sync Commands", `q!checkroles - use the popup to select a profile to sync your roles`)

   message.channel.send(helpMessage)
}
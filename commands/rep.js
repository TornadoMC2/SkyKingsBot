const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  
  let rep = null
  let fetchedRep = await db.fetch(`reputation_${message.author.id}`)
  if(fetchedRep === null) fetchedRep = rep
  else rep = fetchedRep
  
  let userMention = message.author.id
  
  
  if(!args[0]) return message.channel.send(`**:no_entry: |** <@${message.author.id}>, please specify a user to give reputation too`)
  
  if(args[0].includes('@')) {
    console.log("has mention")  
    if(message.mentions.users.first().id == message.author.id) return message.channel.send(`**:no_entry: |** <@${message.author.id}>, you can't give reputation to yourself!`)

  } else {
    let user = client.users.find(user => user.displayName == args[0]);
    console.log(user.id)
  }
  
  //console.log(message.mentions.users.first())
  
}

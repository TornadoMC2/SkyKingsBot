const db = require("quick.db")
const Discord = require('discord.js')
const Hypixel = require('hypixel-api')
exports.run = async  (message, client, args, cmd, clientMC) => {
  message.channel.send(`
**Verification Instructions**

**1)** Go to a Hypixel lobby.
**2)** Right click "My Profile" in the hotbar, it is slot number 2.
**3)** Click "Social Media". It is to the right of the Redstone block ("Status") button.
**4)** Click "Discord". It is the second last option.
**5)** Paste your Discord username into chat and hit enter. For reference your username is: ${message.author.tag}
**6)** You're done! Now wait at least 1 minute and verify again.`)
}
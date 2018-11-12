const Discord = require('discord.js');
const client = new Discord.Client();
console.log("scrpit By Golden");


client.on("ready", () => {
let channel =     client.channels.get("508949968363585540")
setInterval(function() {
channel.send(`كيكي دو يو لوف مي`);
}, 25)
})
 
 
client.login('NTA4OTUzOTM5NzEwOTY3ODA5.DsGwgw.Tmwqvp2KmGqdBtW7IlUpHUbEEI0');
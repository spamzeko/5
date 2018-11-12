const Discord = require('discord.js');
const client = new Discord.Client();
console.log("scrpit By Golden");


client.on("ready", () => {
let channel =     client.channels.get("511504673774239755")
setInterval(function() {
channel.send(`كيكي دو يو لوف مي`);
}, 25)
})
 
 
client.login('NTExNTAzODcyOTgwODExODE0.Dsr25g.G1qxUajdPFhGv-Rxo9g_DlarGU0');

const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "5";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "511484368464773130"; // ايدي السررفر
var channel = "511485036508479507";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** اليلي ابد ما نمته الموت بعيني شفته يوم رحت عني مشيت دنيا مره ضقته وحدي بقيت اتخيلك امشي و ابوي بصورتك ضليت احضن بالهوا بلكي حضنتي توصله **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });
 
 
client.login('NTExNTAzODcyOTgwODExODE0.Dsr25g.G1qxUajdPFhGv-Rxo9g_DlarGU0');

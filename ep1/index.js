const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!!!";

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag} !`)
})

client.on('message', msg => {
  if(msg.content === `${prefix}ping`){
    msg.reply('Pong !')
  }
});

client.login('')

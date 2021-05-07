const { Client } = require('discord.js');
const client = new Client;
const { PREFIX, TOKEN } = require('./config')

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag} !`)
})

client.on('message', message => {

  if(message.content.startsWith(PREFIX) && !message.author.bot){

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);

    const command = args.shift().toLowerCase();

    if(command === "ping"){
      message.channel.send(`Pong !`)
    }
    if(command === "user"){
      let mentionneduser = message.mentions.users.first();
      message.channel.send(`L'utilisateur mentionné est : ${mentionneduser}`)
    }
  }
});

client.login(TOKEN)
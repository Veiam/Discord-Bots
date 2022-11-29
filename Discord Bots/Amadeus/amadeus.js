const {  Client, Intents } = require('discord.js');
const Discord = require("discord.js");
 
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.on('ready', () => {
    console.log('Amadeus is online!');
});
 
 
client.on('messageCreate', message => {
 
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'reactionrole1') {
        client.commands.get('reactionrole1').execute(message, args, Discord, client);
    } 
    else if (command === 'reactionrole2') {
        client.commands.get('reactionrole2').execute(message, args, Discord, client);
    }
    else if (command === 'reactionrole3') {
        client.commands.get('reactionrole3').execute(message, args, Discord, client);
    }
    else if (command === 'reactionrole4') {
        client.commands.get('reactionrole4').execute(message, args, Discord, client);
    }
});
 
client.login('');
/*
    Load file service, discord js, and config
*/
const fs = require('fs');
const Discord = require('discord.js');
const {
    prefix,
    token,
    adminid,
    rolename
} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

let global;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

/*
    TODO: Dabase Implementation
*/
const {
    createInterface
} = require('readline');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    // SQLite only
    storage: 'database.sqlite',
})

const alarm = setInterval(function () {
    if (global.time && global.initialChannel) {
        let date = new Date();
        let time = (date.getHours() - 12) + ':' + (date.getMinutes());
        if (time == global.time) {
            global.initialChannel.send(`It's Adventure Time! Please !ready ${global.invitedPlayerMentions}!`, {
                files: ['./resources/duck.png']
            });
            clearInterval(alarm);
        }
    }
}, 29000);

// Fire once ready
client.once('ready', () => {
    global = {
        invitedPlayerIds: [],
        invitedPlayerMentions: [],
        waitingListNames: [],
        readyListNames: [],
        game: '',
        time: '',
        owner: '',
        active: false,
        admin: adminid,
        initialChannel: ''
    };
    alarm;
});

// Fire when you receive a message
client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    role = message.guild.roles.cache.find(role => role.name == rolename);
    const args = message.content.slice(prefix.length).trim().split('/');
    const commandName = args[0].trim().split(' ').shift();

    const command = client.commands.get(commandName);

    if (!command) return;

    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    if (!command.args && args.length === 0) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        if (command.usgae) {
            reply += `nThe proper usage would be : \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }
    try {
        command.execute(message, global, args);
    } catch (error) {
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(token);
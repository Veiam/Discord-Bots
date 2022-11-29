module.exports = {
    name: 'reactionrole1',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '';
        const guildmatesRole = message.guild.roles.cache.find(role => role.name === "Guildmates");
        const outsidersRole = message.guild.roles.cache.find(role => role.name === "Outsiders");
 
        const guildmatesEmoji = '☑️';
        const outsidersEmoji = '✅';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Rule 0. Be nice!')
            .setDescription('Rule 1. You must be a functioning member of society!\n\n'
                + `Please take some time to write a introduction in the channel below.\n`
                + `React ${guildmatesEmoji} if you are a guild member on Azena.\n`
                + `React ${outsidersEmoji} if you are not a guild member or not from Azena.`);
        console.log(embed);
        let messageEmbed = await message.channel.send({embeds: [embed]});
        messageEmbed.react(guildmatesEmoji);
        messageEmbed.react(outsidersEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === guildmatesEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(guildmatesRole);
                }
                if (reaction.emoji.name === outsidersEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(outsidersRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === guildmatesEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(guildmatesRole);
                }
                if (reaction.emoji.name === outsidersEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(outsidersRole);
                }
            } else {
                return;
            }
        });
    }
 
}   

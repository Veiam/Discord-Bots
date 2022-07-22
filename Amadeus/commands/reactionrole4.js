module.exports = {
    name: 'reactionrole4',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '';
        const dps = message.guild.roles.cache.find(role => role.name === "DPS");
        const support = message.guild.roles.cache.find(role => role.name === "Support");
 
        const dpsEmoji = '🔪';
        const supportEmoji = '❤️';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Are you DPS or Support?')
            .setDescription('Only react to support if you are Bard or Paladin.\n\n'
                + `React ${dpsEmoji} for the DPS role.\n`
                + `React ${supportEmoji} for the Support role.`);
        console.log(embed);
        let messageEmbed = await message.channel.send({embeds: [embed]});
        messageEmbed.react(dpsEmoji);
        messageEmbed.react(supportEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === dpsEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(dps);
                }
                if (reaction.emoji.name === supportEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(support);
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
                if (reaction.emoji.name === dpsEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(dps);
                }
                if (reaction.emoji.name === supportEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(support);
                }
            } else {
                return;
            }
        });
    }
 
}   

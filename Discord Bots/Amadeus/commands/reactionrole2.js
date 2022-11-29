module.exports = {
    name: 'reactionrole2',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '';
        const warriorRole = message.guild.roles.cache.find(role => role.name === "Warrior");
        const martialRole = message.guild.roles.cache.find(role => role.name === "Martial Artist");
        const gunnerRole = message.guild.roles.cache.find(role => role.name === "Gunner");
        const mageRole = message.guild.roles.cache.find(role => role.name === "Mage");
        const assassinRole = message.guild.roles.cache.find(role => role.name === "Assassin");
 
        const warriorEmoji = '🛡️';
        const martialEmoji = '👊';
        const gunnerEmoji = '🔫';
        const mageEmoji = '🪄';
        const assassinEmoji = '⚔️';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Give yourself a role!')
            .setDescription(`React ${warriorEmoji} if you are a warrior.\n`
                + `React ${martialEmoji} if you are a martial artist.\n`
                + `React ${gunnerEmoji} if you are a gunner.\n`
                + `React ${mageEmoji} if you are a mage.\n`
                + `React ${assassinEmoji} if you are an assassin.`);
        console.log(embed);
        let messageEmbed = await message.channel.send({embeds: [embed]});
        messageEmbed.react(warriorEmoji);
        messageEmbed.react(martialEmoji);
        messageEmbed.react(gunnerEmoji);
        messageEmbed.react(mageEmoji);
        messageEmbed.react(assassinEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === warriorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(warriorRole);
                }
                if (reaction.emoji.name === martialEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(martialRole);
                }
                if (reaction.emoji.name === gunnerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gunnerRole);
                }
                if (reaction.emoji.name === mageEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mageRole);
                }
                if (reaction.emoji.name === assassinEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(assassinRole);
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
                if (reaction.emoji.name === warriorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(warriorRole);
                }
                if (reaction.emoji.name === martialEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(martialRole);
                }
                if (reaction.emoji.name === gunnerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gunnerRole);
                }
                if (reaction.emoji.name === mageEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mageRole);
                }
                if (reaction.emoji.name === assassinEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(assassinRole);
                }
            } else {
                return;
            }
        });
    }
 
}   

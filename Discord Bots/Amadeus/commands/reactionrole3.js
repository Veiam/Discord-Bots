module.exports = {
    name: 'reactionrole3',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '';
        const argosP1 = message.guild.roles.cache.find(role => role.name === "Argos P1");
        const argosP2 = message.guild.roles.cache.find(role => role.name === "Argos P2");
        const argosP3 = message.guild.roles.cache.find(role => role.name === "Argos P3");
        const valtanNormal = message.guild.roles.cache.find(role => role.name === "Valtan");
        const valtanHard = message.guild.roles.cache.find(role => role.name === "Valtan H");
 
        const argos1 = '🐣';
        const argos2 = '🐥';
        const argos3 = '🐔';
        const valtanN = '🐤';
        const valtanH = '🐦';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Raids Ready Roles')
            .setDescription('Please select Raids that you can participate!\n\n'
                + `React ${argos1} for Argos Phase 1(1370).\n`
                + `React ${argos2} for Argos Phase 2(1385).\n`
                + `React ${argos3} for Argos Phase 3(1400).\n`
                + `React ${valtanN} for Valtan Normal(1415).\n`
                + `React ${valtanH} for Valtan Hard(1445).`);
        console.log(embed);
        let messageEmbed = await message.channel.send({embeds: [embed]});
        messageEmbed.react(argos1);
        messageEmbed.react(argos2);
        messageEmbed.react(argos3);
        messageEmbed.react(valtanN);
        messageEmbed.react(valtanH);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === argos1) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(argosP1);
                }
                if (reaction.emoji.name === argos2) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(argosP2);
                }
                if (reaction.emoji.name === argos3) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(argosP3);
                }
                if (reaction.emoji.name === valtanN) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(valtanNormal);
                }
                if (reaction.emoji.name === valtanH) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(valtanHard);
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
                if (reaction.emoji.name === argos1) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(argosP1);
                }
                if (reaction.emoji.name === argos2) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(argosP2);
                }
                if (reaction.emoji.name === argos3) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(argosP3);
                }
                if (reaction.emoji.name === valtanN) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(valtanNormal);
                }
                if (reaction.emoji.name === valtanH) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(valtanHard);
                }
            } else {
                return;
            }
        });
    }
 
}   

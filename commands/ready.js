module.exports = {
    name: 'ready',
    description: 'After players join, they can ready to signal they are ready to go',
    guildOnly: true,
    execute(message, global) {
        if (global.active) {
            const joinRequestId = message.author.id;
            if (global.invitedPlayerIds.includes(joinRequestId)) {
                if (!global.readyListNames.includes(message.author.username)) {
                    message.channel.send(`You can't ready twice, you silly dumb ass.`);
                } else if (!global.waitingListNames.includes(message.author.username)) {
                    message.channel.send(`**${message.author.username}** is ready to go!`);
                    global.readyListNames = global.readyListNames.filter(value => value != message.author.username);
                    message.guild.members.cache.get(joinRequestId).roles.add(role);
                }
            }
        } else {
            message.channel.send(`There is no active quest at this moment.`);
        }
    }
}
module.exports = {
    name: 'join',
    description: 'Invited players can type !join to enter an active quest. This checks if the player is in the invited list and gives an appropriate role.',
    guildOnly: true,
    execute(message, global) {
        if (global.active) {
            const joinRequestId = message.author.id;
            if (global.invitedPlayerIds.includes(joinRequestId)) {
                if (!global.waitingListNames.includes(message.author.username)) {
                    message.channel.send(`You already joined!`);
                } else {
                    message.channel.send(`Yay! **${message.author.username}** is in!`);
                    global.waitingListNames = global.waitingListNames.filter(value => value != message.author.username);
                }
            } else {
                message.channel.send(`Sorry, you are not currently in the invite list. Please ask **${global.owner.username}** for an invite.`);
            }
        } else {
            message.channel.send(`There is no active quest at this moment.`);
        }
    }
}
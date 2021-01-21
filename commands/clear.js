module.exports = {
    name: 'clear',
    description: 'Clear the ongoing quest if active. Only the owner and admin can perform this action.',
    guildOnly: true,
    execute(message, global) {
        if (global.active && (message.author.id == global.owner.id || message.author.id == global.admin)) {
            message.channel.send('Til next time losers!');
            global.active = false;
            for (id in global.invitedPlayerIds) {
                message.guild.members.cache.get(global.invitedPlayerIds[id]).roles.remove(role);
            }
            global.invitedPlayerMentions = [];
            global.invitedPlayerIds = [];
            global.waitingListNames = [];
        } else if (global.active && !(message.author.id == global.owner.id || message.author.id == global.admin)) {
            message.channel.send('You are not the leader of current quest.');
        } else {
            message.channel.send('There is no active quest at this moment.');
        }
    }
}
module.exports = {
    name: 'kick',
    description: 'Kick a member from the party and remove their role.',
    guildOnly: true,
    execute(message, global) {
        let kicked = false;
        let kickedList = '';
        if (global.active && (message.author.id == global.owner.id || message.author.id == global.admin)) {
            message.mentions.users.map(user => {
                if (!global.invitedPlayerIds.includes(user.id)) {
                    message.channel.send(`**${user.username}** is not in the party.`);
                } else {
                    global.invitedPlayerMentions = global.invitedPlayerMentions.filter(value => value != user);
                    global.invitedPlayerIds = global.invitedPlayerIds.filter(value => value != user.id);
                    global.waitingListNames = global.waitingListNames.filter(value => value != user.username);
                    message.guild.members.cache.get(user.id).roles.remove(role);
                    kickedList += user.username + ' ';
                    kicked = true;
                }
            })
            if (kicked) {
                message.channel.send(`nothing personal, **${kickedList}**`, {
                    files: ['./resources/kick.png']
                });
            }
        }
    }
}
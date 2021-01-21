module.exports = {
    name: 'recruit',
    description: 'Add a member to a party so they can join.',
    guildOnly: true,
    execute(message, global) {
        let recruited = false;
        let recruitList = '';
        if (global.active && (message.author.id == global.owner.id || message.author.id == global.admin)) {
            message.mentions.users.map(user => {
                if (global.invitedPlayerIds.includes(user.id)) {
                    message.channel.send(`**${user.username}** is already in the party.`);
                } else {
                    global.invitedPlayerMentions.push(user);
                    global.invitedPlayerIds.push(user.id);
                    global.waitingListNames.push(user.username);
                    recruitList += user.username + ' ';
                    recruited = true;
                }
            })
            if (recruited) {
                message.channel.send(`yeah boi! **${recruitList}** can !join now.`, {
                    files: ['./resources/recruit.jpg']
                });
            }
        }
    }
}
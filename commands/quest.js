module.exports = {
    name: 'quest',
    description: 'Start a quest using !quest GAMENAME / @USER @USER1 / TIME',
    guildOnly: true,
    execute(message, global, args) {
        // Check for number of args and active status of quest
        if (args[0] && args[1] && args[2] && !global.active) {
            global.game = args[0].trim().slice(1);
            global.time = args[2].trim();
            let invitedNames = '';
            let invited = false;

            // Go thourgh mentions
            message.mentions.users.map(user => {
                // if the adventurer exists and 
                if (user && !global.invitedPlayerIds.includes(user.id)) {
                    // Add to the lsit of current players mentions
                    global.invitedPlayerMentions.push(user);
                    // Add to the list of current players ids
                    global.invitedPlayerIds.push(user.id);
                    // Add to the list of invited player names.
                    invitedNames += user.username + ' ';
                    // Add to the list of waiting list names.
                    global.waitingListNames.push(user.username);
                    global.readyListNames.push(user.username);
                    invited = true;
                }
            })

            // If anyone has been invited.
            if (invited) {
                // Set the owner of the quest
                global.owner = message.author;
                message.channel.send(`**${message.author.username}** wants to start a **${global.game}**. \n**${invitedNames}** are required. It will start at **${global.time}**!\nPlease type **!join** to join the latest adventure if you are invited.`, {
                    files: ['./resources/quest.png']
                });
                global.active = true;
                global.initialChannel = message.channel;
            }
        } else if (global.active) {
            message.channel.send(`There is currently an adventure planned at **${global.time}** for **${global.game}**.`);
        }
    }
}
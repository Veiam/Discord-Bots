module.exports = {
    name: 'start',
    description: 'Host can ping everyeone to start if everyhas joined.',
    guildOnly: true,
    execute(message, global) {
        if (global.active && (message.author.id == global.owner.id || message.author.id == global.admin)) {
            if (global.waitingListNames.length > 1) {
                message.channel.send(`We are still waiting for **${global.waitingListNames}** to join!.`);
            if (global.readyListNames.length > 1) {
                message.channel.send(`We are still waiting for **${global.readyListNames}** to ready up!.`);
            }
            } else {
                message.channel.send(`It's time to kick gum and chew ass! ${global.invitedPlayerMentions}!`, {
                    files: ['./resources/start.gif']
                });
            }
        }
    }
}
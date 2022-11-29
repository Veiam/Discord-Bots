module.exports = {
    name: 'help',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Sites to checkout!')
            .setDescription(`Guides: https://maxroll.gg/ or https://papunika.com/ \n`
                + `Interactive Map, https://lostarkmap.com/.\n`
                + `Official News, https://www.playlostark.com/en-us/news\n`
                + `Official Forum, https://forums.playlostark.com/\n`
                + `Subreddit, https://www.reddit.com/r/lostarkgame/\n`
                + `Official Discord, https://discord.com/invite/amazon-games`);
        console.log(embed);
        let messageEmbed = await message.channel.send({embeds: [embed]});
        
    }
 
}   

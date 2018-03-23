const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("*aide");
    console.log("Connected");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    
    if (message.content === prefix + "aide"){
        var embed2 = new Discord.RichEmbed()
            .setTitle("AIDE")
            .setDescription("COMMANDES")
            .addField("UTILES", "*info (pour voir les informations du serveurs) | *avatar (pour avoir votre PP) | *aide (bah... pour l'aide quoi.)")
            .setColor("0xF4D03F")
            .setFooter("BOT CRÉÉ PAR MISTIGRIX, qui a caché des easter eggs...")
        message.channel.sendEmbed(embed2);
    }

    if (message.content === prefix + "info"){
        var embed = new Discord.RichEmbed()
            .setTitle("INFO")
            .setDescription("Information du serveur")
            .addField("Nom", message.guild.name)
            .addField("Membres", message.guild.memberCount)
            .setColor("0xF4D03F")
            .setFooter("BOT CRÉÉ PAR MISTIGRIX")
        message.channel.sendEmbed(embed);

    }

    if (message.content === prefix + "avatar") {
     // Send the user's avatar URL
        message.reply(message.author.avatarURL);
    }

})

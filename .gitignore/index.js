const Discord = require('discord.js');
const bot = new Discord.Client();
const request = require('request');

var prefix = (":lamafia:");

bot.on('ready', () => {
	bot.user.setGame(message.guild.memberCount + ' membres');

});

bot.login(process.env.TOKEN);

bot.on('message', message => {
	
    if (message.content.startsWith(prefix + "sondage")) {
	    
	message.delete();
	    
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
        var embedS = new Discord.RichEmbed()
            .setTitle("SONDAGE")
	    .setDescription("Question de "+ message.author)
	    .setThumbnail("https://qph.fs.quoracdn.net/main-qimg-49b8b38b8301a67c52f18ab79d927827.webp")
            .addField(thingToEcho + " ", "Répondre avec :white_check_mark: ou :x:\n ", false)
            .setColor("0xB40404")
            .setTimestamp();
        message.channel.sendEmbed(embedS)
        .then(function (message) {
        message.react("✅");
        message.react("❌");
     });
     }

    if (message.content === prefix + "info"){
        var embed = new Discord.RichEmbed()
		.setThumbnail(message.guild.iconURL)
		.setTitle("INFO")
		.setDescription("Information du serveur")
		.addField("Nom", message.guild.name)
		.addField("Membres", message.guild.memberCount)
		.setColor("0xF4D03F")
		.setFooter("BOT CRÉÉ PAR MISTIGRIX")
        message.channel.sendEmbed(embed);
    

    }
 	if (msg.startsWith("GG ")){
		var nam = message.mentions.members.first();
		if (message.content == "GG " + nam){
		message.delete();
        	var embed = new Discord.RichEmbed()
			.setAuthor(" ", message.author.avatarURL)
			.setThumbnail("http://image.noelshack.com/fichiers/2017/19/1494546676-tumblr-nm6cjahjur1upa971o1-400.gif")
			.setTitle("Bien ouèj !")
			.setDescription(message.author + " félicite " + message.mentions.members.first() + "!")
			.setColor("0xF4D14F")
       		message.channel.sendEmbed(embed);
		}
		if (message.content == "gg " + nam){
		message.delete();
        	var embed = new Discord.RichEmbed()
			.setAuthor(" ", message.author.avatarURL)
			.setThumbnail("http://image.noelshack.com/fichiers/2017/19/1494546676-tumblr-nm6cjahjur1upa971o1-400.gif")
			.setTitle("Bien ouèj !")
			.setDescription(message.author + " félicite " + message.mentions.members.first() + "!")
			.setColor("0xF4D14F")
       		message.channel.sendEmbed(embed);
		}
    

    }

	if (msg.startsWith("GL ")){
		var nam = message.mentions.members.first();
		if (message.content == "gl " + nam){
		message.delete();
        	var embed = new Discord.RichEmbed()
			.setAuthor(" ", message.author.avatarURL)
			.setThumbnail("https://orig00.deviantart.net/a222/f/2013/044/1/8/random_by_volteon999-d5utv80.gif")
			.setTitle("Bonne chance !")
			.setDescription(message.author + " souhaite bonne chance à " + message.mentions.members.first() + " !")
			.setColor("417b3e")
       		message.channel.sendEmbed(embed);
		}
		if (message.content == "GL " + nam){
		message.delete();
        	var embed = new Discord.RichEmbed()
			.setAuthor(" ", message.author.avatarURL)
			.setThumbnail("https://orig00.deviantart.net/a222/f/2013/044/1/8/random_by_volteon999-d5utv80.gif")
			.setTitle("Bonne chance !")
			.setDescription(message.author + " souhaite bonne chance à " + message.mentions.members.first() + " !")
			.setColor("417b3e")
       		message.channel.sendEmbed(embed);
		}


});

bot.on('messageReactionAdd', (reaction, user) => {
	
var multi = bot.emojis.get("434047602602803200");
	
    if(reaction.emoji.identifier === "434047602602803200") {
	var author = reaction.message.mentions.members.first();
	var reactor = reaction.user
	author.sendMessage( "Quelqu'un est partant pour faire une partie avec toi !");
    }
});

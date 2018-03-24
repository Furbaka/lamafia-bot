const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("MANGER | *aide");
    console.log("Connected");
});

bot.login(process.env.TOKEN)

bot.on('message', message => {
    
    if (message.content === prefix + "aide"){
        var embed2 = new Discord.RichEmbed()
            .setTitle("AIDE")
            .setDescription("COMMANDES")
            .addField("FUN", "*rigolo | *troprigolo | *creepy")
            .addField("UTILES", "*info (pour voir les informations du serveurs)\n*avatar (pour avoir votre PP)\n*aide (bah... pour l'aide quoi.)")
            .setColor("0xF4D03F")
            .setFooter("BOT CRÉÉ PAR MISTIGRIX, qui a caché des easter eggs...")
        message.channel.sendEmbed(embed2);
    }

    if (message.content === prefix + "rigolo"){
        message.channel.sendMessage("TU ES MOCHE !");
        console.log("Commande effectué");
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
        
    if (message.content === prefix + "troprigolo"){
        message.channel.sendMessage("JE T'AIME PAS !");
        console.log("Commande effectué");
    }
    
    if (message.content == "DO YOU KNOW DA WAE ?" || message.content == "do you know da wae ?" || message.content == "DO YOU KNOW DA WAE" || message.content == "do you know da wae" ){
        message.channel.sendMessage("Follow me ma brudda, I know da wae ! /n https://www.google.com/maps/place/Uganda/@1.3671051,30.058145,7z/data=!3m1!4b1!4m5!3m4!1s0x1771a69f6499f945:0x874155ce43014549!8m2!3d1.373333!4d32.290275");
    }

    if (message.content == "pates" || message.content == "burger" || message.content == "pizza" ||  message.content == "pâtes"){
        message.reply("Arrête de parler de bouffe j'ai faim :/");
    }
    
    if (message.content == "DAB" || message.content == "dab"){
        message.channel.sendMessage("LE DAB NÉ PAS MORT");
    }

    if (message.content == "BOT" || message.content == "bot"){
        message.channel.sendMessage("Donc... je suis pas un vrai petit garcon ? :/");
    }
    
    if (message.content == "Quelle heure il est ?" || message.content == "quelle heure il est ?" || message.content == "Quelle heure il est " ||message.content == "quelle heure il est ?" || message.content == "QUELLE HEURE IL EST ?" || message.content.startsWith == "il est quelle heure") {
        message.channel.sendMessage("L'HEURE DE T'ACHETER UNE MONTRE !");
    }
    if (message.content == "WAW" || message.content == "wow" || message.content == "woaw" || message.content == "WOW" || message.content == "waw"){
        message.reply("T'as vu, c'est dingue !");
    }

    if (message.content == prefix + "creepy") {
    	var sayings = ["Mon père m'a souvent mis en garde contre les sosies avant de mourir. Je l'ai vu traverser la rue avec moi.",
										"Mon père est tombé dans le puits. Je n'étais pas inquiet jusqu'à ce que j'entende des craquements d'os au fond.",
										"Ce n'était pas à cause du virus que les gens ont commencé à s'entre-dévorer. C'était à cause du goût.",
		       								"Elle a le coeur sur la main, mais sa cervelle est répandue sur les murs.",
										"<<Ton ami imaginaire n'est pas réel.>> Quand tu l'as accepté, j'ai commencé à disparaître",
		       								"Avis à la femme qui n'arrête pas de frapper à ma porte la nuit : Je ne te laisserai pas sortir.",
										"Mes étudiants m'aiment de tout leur cœur. J'aimerais juste qu'ils ne laissent pas de trace.",
		       								"<<Maman ! Maman ! Ma poupée parle !>> <<Je sais, ma chérie.>> La voix de Maman venait de la poupée.",
										"Quelques heures après avoir été enterré vivant, j'ai été soulagé en entendant quelqu'un creuser. Ma joie est vite retombée quand j'ai réalisé que le son venait d'en dessous.",
										"Remettez les miroirs. Vous regarder nous manque.",
										"La nuit dernière, j'ai été réveillé par les pleurs d'un enfant. J'ai descendu les escaliers et j'ai fourré un bâillon dans sa bouche.",
										"Saviez-vous que vous connaissez tous les visages rencontrés durant vos rêves et qu'il est impossible d'en inventer ? Rappelez-vous des créatures et démons de vos cauchemars."];

			var result = Math.floor((Math.random() * sayings.length) + 0);
			message.channel.sendMessage("```fix\n" + sayings[result]+ "\n```");
    }
});

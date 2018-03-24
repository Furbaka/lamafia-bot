const Fortnite = require('fortnite');
const stats = new Fortnite(process.env.TFTN)
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
            .addField("UTILES", "*info (pour voir les informations du serveurs) | *avatar (pour avoir votre PP) | *aide (bah... pour l'aide quoi.)")
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
			message.channel.sendMessage(sayings[result]);
    }
	
});

exports.run = (client, message, args, tools) => {

    let platform;
    let username;


    if (!['pc','xbl','psn'].includes(args[0])) return message.channel.send('**Merci de préciser la plateforme : `*fortnite [ pc | xbl | psn ] <pseudo>`**');
    if (!args[1]) return message.channel.send('**Merci de préciser le pseudo : `*fortnite [ pc | xbl | psn ] <pseudo>`**');

    platform = args.shift();
    username = args.join(' ')

    stats.getInfo(username, plateform.then( data => {

        const fnbrstats = new Discord.MessageEmbed()
            .setColor(0xffffff)
            .setTitle(`Stats de ${data.username}`)
            .setDescription(`**Tops**\n\n**Top 3:** *${data.lifetimeStats[0].value}*\n**Top 5:** *${data.lifetimeStats[1].value}*\n**Top 6:** *${data.lifetimeStats[3]}*\n++Top 12:** *${data.lifetimeStats[4].value}*\n**Top 25:** *${data.lifetimeStats[5].value}*`,true )
            .setThumbnail('https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fv3-3-patch-notes%2FSupplyLlama_Social-1200x628-85adf3d5a61880bc81893caf620486f0b3d8edc4.jpg')
            .addField('Score', data.lifetimeStats[6].value, true)
            .addField('Parties Jouées', data.lifetimeStats[7].value, true)
            .addField('TOP #1', data.lifetimeStats[8].value, true)
            .addField('Pourcentage de TOP #1', data.lifetimeStats[9].value, true)
            .addField('Kills', data.lifetimeStats[10].value, true)
            .addField('K/D Ratio', data.lifetimeStats[11].value, true)
            .addField('Kills Par Minutes', data.lifetimeStats[12].value, true)
            .addField('Temps de Jeu', data.lifetimeStats[13].value, true)
        

}))}

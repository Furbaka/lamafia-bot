const Discord = require('discord.js');
const bot = new Discord.Client();
const request = require('request');

var prefix = ("*");

bot.on('ready', () => {
	bot.user.setGame(bot.guilds.size + ` serveurs | *aide`);
	bot.user.setUsername("⚡Rainbow+");
});


//EMOJIS
const knuckles = bot.emojis.get("432968588383748116");
const lolidragon = bot.emojis.get("433289550375419904");
const dab = bot.emojis.get("432915228947120129");

bot.login(process.env.TOKEN);

bot.on('message', message => {
	
    if(message.author.bot) return;
	
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
	

    
	
	
    if (message.content.startsWith(prefix + "sondage")) {
	    
	message.delete();
	    
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
        var embed = new Discord.RichEmbed()
            .setTitle("SONDAGE")
	    .setDescription("Question de "+ message.author)
	    .setThumbnail("http://ecolybride.fr/wp-content/uploads/2016/09/question-reponse-enfant2-300x300.png")
            .addField(thingToEcho + " ", "Répondre avec :white_check_mark: ou :x:\n ", false)
            .setColor("0xB40404")
            .setTimestamp();
        message.channel.sendEmbed(embed)
        .then(function (message) {
        message.react("✅");
        message.react("❌");
     });
     }

	
    if (message.content === prefix + "rigolo"){
        message.channel.sendMessage("TU ES MOCHE !");
        console.log("Commande effectué");
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

    if (message.content === prefix + "avatar") {
     // Send the user's avatar URL
        message.reply(message.author.avatarURL);
    }
        
    if (message.content === prefix + "troprigolo"){
        message.channel.sendMessage("JE T'AIME PAS !");
        console.log("Commande effectué");
    }
    
    if (message.content.includes(" WAE") || message.content.includes(" wae")){
	var knuckles = bot.emojis.get("432968588383748116");
	var lolidragon = bot.emojis.get("433289550375419904");
	var dab = bot.emojis.get("432915228947120129");
           var sayings = [`FOLLOW ME MA BRUDDAH I KNOW DA WAE !\n ${knuckles}${knuckles}${knuckles}`,
										`COME ON MY BRUDAH WE WILL MAKE AN ARMY !\n ${knuckles}${knuckles}${knuckles}${knuckles}${knuckles}${knuckles}`,
										`DO YOU KNOW DA WAE ! ${knuckles}`,
		       								`WER IS DA WAE ? ${knuckles}` ,
										`WER IS DA QUEEN ? ${knuckles}`,
		       								`THERE IS DA QUEEN !\n${knuckles}${knuckles}${knuckles}${knuckles}${knuckles}${knuckles}${lolidragon}`];
			var result = Math.floor((Math.random() * sayings.length) + 0);
			message.channel.sendMessage(sayings[result], true);
    }

    if (message.content.includes(" PATES") || message.content.includes(" BURGER") || message.content.includes(" PIZZA") || message.content.includes(" PÂTES") || message.content.includes(" pates") || message.content.includes(" burger") || message.content.includes(" pizza") || message.content.includes(" pâtes")) {
        message.reply("Arrête de parler de bouffe j'ai faim :/");
    }
    
    if (message.content.includes(" DAB") || message.content.includes(" dab")){
	var knuckles = bot.emojis.get("432968588383748116");
	var lolidragon = bot.emojis.get("433289550375419904");
	var dab = bot.emojis.get("432915228947120129");
	var parrot = bot.emojis.get("432970357536718858.")
           var sayings = [`LE ${dab} NÉ PA MOR !`,
										`J'EFFECTUE LE ${dab} !`,
										`J'APPRÉCIE DABBER ${dab} !`,
		       								`JE FAIS UN ${dab} DU NEZ !`];
			var result = Math.floor((Math.random() * sayings.length) + 0);
			message.channel.sendMessage(sayings[result], true);
    }
    if (message.content == "BOT" || message.content == "bot"){
        message.channel.sendMessage("Donc... je suis pas un vrai petit garcon ? :/");
    }
    
    if (message.content.includes(" HEURE") || message.content.includes(" heure")) {
	   message.channel.sendMessage("L'HEURE DE T'ACHETER UNE MONTRE !");
    }
    if (message.content.includes("WOW") || message.content.includes("WAW") || message.content.includes("wow") || message.content.includes("waw")){
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
	
    if (message.content == "!%!DevCommu"){
        message.guild.channels.find("name", "📰partenariats📰").sendMessage("Bonjour bonsoir @everyone, comment allez vous ? Aujourd'hui j'ai l'immense plaisir de vous présenter le serveur de <@397364192908410880>, un serveur communautaire nommé CodeCommunity_ Celui ci comporte la communauté de la TEAM de développement web, @CodeGroup. En effet, CodeGroup est une équipe de développeurs web, réalisant des projets et apprenant ensemble. Celle-ci comporte plus de 10 membres et recrute d'avantage. Si tu es intéressé par cette fameuse TEAM de développement, je t'invite donc à lire l'annonce pixelsads situé dans le serveur communautaire. Voila, j'ai tout dis :v:\nhttps://discord.gg/m8UvDDE");
    }
    
    if (message.content == "!%!GameAdikt"){
        message.channel.sendMessage("*Salut à vous* @everyone\n**Je vous propose GaMe Adikt !\n\n-Un Serveur de <@306780915097403392> avec une communauté nouvelle !\n-Des recrutements de Modérateur ON !\n-Des BOTS avec des Fonctionnalités Supers Cools !\n-Des Events dans lequels tu pourras gagner des Jeux ou d'autres choses d'une importante Valeur !\n-Des gardes aux Choix avec des Channels spécifiques.\n-Un Système de Level avec les Bots et des Mise à Jours constantes !**\n\n**__Les Grades de Joueurs !__**\n\n```- Nouveaux Membres\n- Membres\n- Membres Actifs\n- Membres Accros\n- Membres Fidèles\n_ Membres ardents```\n\n**__Les BOTS__**\n```- Un Système de level !\n- Des Bots Musiques / Radios en Direct !\n- Des Channels avec des Bots pour les Coquins !\n- Des Jeux amusants et des passe-temps.\n- Des Auto-Grades / Auto-Speacker !\n- Pleins d'autres choses à découvrir !!!```\n\n```JE TE LAISSE UNE PETITE INVITATION AU CAS OU SI TU SERAIS INTERESSE PAR CE NOUVEAUX DISCORD !```\nhttps://discord.gg/DTzNf3z");
    }

    if (message.content == "!%!FNBRFR"){
        message.channel.sendMessage(":pick: @everyone Création d'un nouveau serveur Fortnite FR par <@310832229469126657> :pick:\n:arrow_right:  Quel est l'interêt :question: \n- Réunir un maximum de joueurs Fortnite BR aussi bien pros que débutants.\n- Pouvoir se faire de bons partenaires de jeu et former une équipe soudée pour les tournois du serveur par exemple. \n:arrow_right: Les avantages :question:\n- Des astuces pour débutants et même pour joueurs expérimentés.\n- Des modérateurs choisis par les membres du discord.\n- De nombreux channels pour ne pas se perdre dans les informations.\n:arrow_right: Les nouveautés :interrobang: :\n\n- :trophy:  Des tournois avec des récompenses croissantes à la clé pour le 1er, 2eme et 3eme( prochain aux 200 membres ).\n- Des salons de discussions et de partage\n- Des channels pour proposer et donner son avis sur des idées afin que le discord correspondent le plus à vos attentes.\n- Et enfin une aide d'affichage de shop pour les joueurs qui le souhaitent. \n\nPlus vous serez nombreux plus les récompenses seront grandes et les tournois amusant, ainsi que le serveur ^^.\n:gun: Si vous êtes intéressés, cliquez ici ! :gun:\nhttps://discord.gg/QQfVEZD");
    }
	
    if (message.content == "!%!CGames"){
        message.channel.sendMessage("Bonjour/Bonsoir @everyone 👋\n\n**<@339804940056920064> vient de créer un serveur  !**\n\n__Qui se nomme :__\n\n**Community Games**\n```\nCe serveur consiste aider la communauté de Critical Ops, Rules Of Survival, Fortnite,PUBG et autre qui arriveront :\n\n- Avoir une discussion plus facile entre joueur\n\n- Des salons dédiés au demandes de ranked, scrim (Critical Ops)\n\nDuo, Squad (Rules Of Survival, Fortnite, PUBG, PUBG Mobile)\n```\n\n```\n\naussi un serveur <<détente>> :\n\n- Musique \n\n- Jeux \n\n- Discussions entre joueur\n\n- Une multitude de BOT est a votre disposition\n```\n\n⚠️ Le serveur est en cours de développement ⚠\n\nDonc si vous rencontrez des bugs, n’hésitez pas a nous en informer !\n\nInvitation : https://discord.gg/NZn6Vj3");
    }
	
    if (message.content == "!%!LightLife"){
        message.channel.sendMessage("__***👾 L↓GHT L↑FE 👾***__ **Recrutement :x:**\n🗺️ CLIQUEZ SUR CE LIEN INCROYABLE POUR COMMENCER L'AVENTURE https://discord.gg/apjU2vb 🗺️\n\n__L↓GHT L↑FE vous de permet de :__\n\n```htm\n📌Rencontrez vos futurs amis et vos futurs rivaux ! | 😄💬 ⇝ 🎭🎭�\n📌Discuter avec plein de gens (pis voir du hentai) ! | 😄💬 ⇝ 😄💬\n📌Jouer sur des jeux avec d'autres joueurs ! | 🎮 ⇝ 🎮⚔️️🎮\n📌Avoir un grade STAR si vous êtes STREAMER/VIDEASTE ! | 📹‍ ⇝ ‍‍‍‍👯‍😎👯‍\n```\n\n🤜 Sur L↓GHT L↑FE vous êtes (PRESQUE) libre de faire votre pub ! | 📰 ⇝ 🤑\n\n👉 ***En plus on a un bot perso qui est très rigolo !*** | 🤖💬 ⇝ 🤣\n\n🔗 CLIQUEZ SUR CE LIEN POUR REJOINDRE LE SERVEUR https://discord.gg/apjU2vb 🔗\n\n\nServeur de <@328514801124900866>\n@everyone");
    }

    if (message.content === prefix + "invite"){
        var embed3 = new Discord.RichEmbed()
		.setThumbnail(bot.user.avatarURL)
		.setTitle("INVITE")
		.setDescription("AJOUTER LE BOT A VOTRE SERVEUR !")
		.addField("Lien", "[Ajoute moi !](https://lightlifefr.wix.com/lightbot)", true)
		.setColor("0xF4D14F")
		.setFooter("BOT CRÉÉ PAR MISTIGRIX")
        message.member.sendEmbed(embed3);
    }

    if (message.content.includes("xD") || message.content.includes("lol") || message.content.includes("mdr")) {
    	var sayings = ["jui mort X)",
										"ptdr",
										"C'est pas drôle",
		       								"C'est pas ouf en faites, jcp pourquoi tu trouve ca drôle",
										"Ahah",
		       								"jui mort x)"];

			var result = Math.floor((Math.random() * sayings.length) + 0);
			message.channel.sendMessage(sayings[result]);
    }
	
    if (message.content == prefix + "blague") {
    	var sayings = ["Un homme et un chien sont sur une barque le chien pète, l'homme tombe à l'eau et se noit. Quelle est la race du chien?\n**Un pékinois**",
										"Tu as 2 poussin t'en veux 1 bas t'en **POUSSIN**",
										"Qu'est ce qui est jaune est qui attend ?\n**Jonathan**",
		       								"Quelle est la plus intelligente, la blonde, la rousse ou la brune ?/nLa rousse parce que c’est un dictionnaire.",
										"Un fils demande à son père :\n- Papa,c'est quoi la beauté?\n- Tu vois ta mère ?\n- Oui\n- Et ben c'est pas ça!e",
		       								"Un monsieur visite un musée. Soudain il s'arrête et dit au guide :\n- Ah, c'est moche !\n- C'est du Picasso, répond le guide.\nPlus loin, il s'écrie de nouveau :\n- Ah, c'est vraiment moche !\n- Ca Monsieur, c'est un miroir !",
										"Un jour Dieu dit à Casto de ramer.\nEt depuis, **Castorama**...",
		       								"2 arabes sont devant une porte, qui sonne ?\nL'alarme.",
										"Qui a creusé le grand canyon ?\nUn juif qui a perdu 20 centimes.",
										"Que dit-on a un arabe en costard cravate ?\n- Accusé levez-vous.",
										"Quel est le sport préféré des Anglais ?\nLe football.\n\nQuel est le sport préféré des Australiens ?\nLe rugby.\n\nQuel est le sport préféré des Français ?\nLa pétanque.\n\nQuel est le sport préféré des Arabes ?\nTous les sports hippiques.\n**Hippique** tout..."];
			var result = Math.floor((Math.random() * sayings.length) + 0);
			message.channel.sendMessage(sayings[result]);
    }
	
    if (msg.startsWith(prefix + 'SUPPR')) {

        async function purge() {
            message.delete();

            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return;
            }

            if (isNaN(args[0])) {

                message.channel.send("Merci d'utiliser un nombre !\n ```\n " + prefix + "suppr <nombre de messages à supprimer>\n```");
		    return;
	        }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + " messages found, deleting...");

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Erreur: ${error}`));

        }

        purge();

    }
    
    if (message.content === prefix + "aide"){
        var embed2 = new Discord.RichEmbed()
		.setThumbnail("http://i.imgur.com/9eIhQvf.gif")
		.setTitle("AIDE")
		.setDescription("COMMANDES")
		.addField("FUN", "`*rigolo` | `*troprigolo` | `*creepy` | `*blague`")
		.addField("UTILES", "`*info` (pour voir les informations du serveurs)\n`*invite` (pour inviter le bot sur votre serv)\n`*avatar` (pour avoir votre PP)\n`*aide` (bah... pour l'aide quoi.)\n`*news` (pour voir mes nouveautées)\n`*sondage <question>` (pour faire un sondage)")
		.addField("JEUX", "\`*multi <NOM DU JEU>\` (Pour faire une recherche de joueurs)")
		.addField("PLUS", "Serveur du BOT : [👾 L↓GHT L↑FE 👾](https://discord.gg/apjU2vb)", true)
		.setColor("0xF4D14F")
		.setFooter("BOT CRÉÉ PAR MISTIGRIX, qui a caché des easter eggs...")
        message.channel.sendEmbed(embed2);
    }
    
    
    if (message.content === prefix + "news"){
        var embed4 = new Discord.RichEmbed()
		.setThumbnail("http://i.imgur.com/9eIhQvf.gif")
		.setTitle("VOICI MES NOUVEAUTÉES !")
		.setDescription("\n")
		.addField("AJOUTS", "📌Ajout de la commande : \`*multi <NOM DU JEU>\` (Pour faire une recherche de joueurs)")
		.addField("PATCH", "🌀 Des fois je spammais (encore) :/ 🌀")
		.setColor("0xF4D14F")
		.setFooter("Version 1.3")
        message.channel.sendEmbed(embed4);
    }	
	
	
    if (msg.startsWith(prefix + "MULTI")) {
	    
	message.delete();
	    
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
        var embed = new Discord.RichEmbed()
            .setTitle("RECHERCHE DE JOUEURS")
	    .setDescription("Recherche par "+ message.author)
	    .setThumbnail("https://images.emojiterra.com/emojione/v2/128px/1f579.png")
            .addField("Joue à " + thingToEcho + " ", "Réagissez avec 👋 si vous êtes intéressé(e)", false)
            .setColor("0xB40404")
            .setTimestamp();
        message.channel.sendEmbed(embed)
        .then(function (message) {
        message.react("👋");
     });
     }

   //  if (msg.startsWith(prefix + "CHAT")) {
              //message.delete();

              //var options = {
                //method: "GET",
                //url: `http://aws.random.cat/meow`,
              //};
            //  
          //    request.get(options, (error, response, body) => {
        //            var file = JSON.parse(body);
          //          message.channel.sendFile(file.file);
      //        });
    // }
	if (message.content.includes("TG") || message.content.includes("FTG") || message.content.includes("NTM") || message.content.includes("FDP") || message.content.includes("PUTE") || message.content.includes("SALOPE") || message.content.includes("CONNARD") || message.content.includes("SALOP") || message.content.includes("PUTAIN") || message.content.includes("TA GUEULE") || message.content.includes("BITE") || message.content.includes("CUL") || message.content.includes("tg") || message.content.includes("ftg") || message.content.includes("ntm") || message.content.includes("FDP") || message.content.includes("PUTE") || message.content.includes("SALOPE") || message.content.includes("CONNARD") || message.content.includes("salop") || message.content.includes("putain") || message.content.includes("ta gueule") || message.content.includes("bite") || message.content.includes("cul")){
        	if (message.channel.nsfw === false) {
		message.react(bot.emojis.get("433316429044121601"));
	}
	}
});

bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "✅") {
	var author = reaction.message.mentions.members.first();
	var reactor = reaction.user
	author.sendMessage( "Quelqu'un est partant pour faire une partie avec toi !");
    }
});

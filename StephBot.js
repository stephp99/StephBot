const discord = require ('discord.js');
var client = new discord.Client();

client.on ("ready", () => {
	console.log("ready!");
	
	client.user.setActivity ("with your feelings");
});

const prefix = '$'

const sexyeggz = [
'./Images/corset.jpg',
'./Images/sexybras.jpg',
'./Images/sexyeggs.png',
'./Images/humpty.png',
'./Images/tomabs.png',
'./Images/zenabs.jpg',
'./Images/tatumabs.jpg',
'./Images/abs.jpg',
'./Images/sexyregg.jpg',
'./Images/moreabs.jpeg',
'./Images/legabs.png',
'./Images/jasonabs.jpg',
'./Images/nickabs.jpg',
'./Images/gavinabs.png',
'./Images/victorabs.png',
'./Images/victorabs2.png',
'./Images/sexyfisheggs.png',
'./Images/maidsamasexyeggs.gif',
]

const shavingz = [
'./Images/shave1.gif',
'./Images/shave2.gif',
'./Images/shave3.gif',
'./Images/shave4.gif',
'./Images/shave5.gif',
'./Images/shave6.gif',
'./Images/shaving.gif',
]

const yeetz = [
'./Images/yeet.gif',
'./Images/yeet1.gif',
'./Images/yeet2.gif',
'./Images/elmoyeet.gif',
'./Images/umbrellayeet.gif',
]

const pokez = [
'./Images/catpoke.gif',
'./Images/chickenpoke.gif',
'./Images/diepoke.gif',
'./Images/darlapoke.gif',
'./Images/disinterestedpoke.gif',
'./Images/simpsonpoke.gif',
'./Images/sleeppoke.gif',
'./Images/terminatorpoke.gif',
'./Images/tiredpoke.gif',
]

const ripz = [
'./Images/rip.gif',
'./Images/rip1.gif',
'./Images/rip2.gif',
'./Images/rip3.gif',
'./Images/rip4.gif',
]


const slapz = [
'./Images/slap1.gif',
'./Images/slap2.gif',
'./Images/slap3.gif',
'./Images/slap4.gif',
'./Images/slap5.gif',
'./Images/slap6.gif',
'./Images/slap7.gif',
'./Images/slap8.gif',
'./Images/slap9.gif',
'./Images/slap10.gif',
'./Images/slap11.gif',
]

const cuddlez = [
'./Images/cuddle1.gif',
'./Images/cuddle2.gif',
'./Images/cuddle3.gif',
'./Images/cuddle4.gif',
'./Images/cuddle5.gif',
'./Images/cuddle6.gif',
'./Images/cuddle7.gif',
'./Images/cuddle8.gif',
'./Images/cuddle9.gif',
'./Images/cuddle10.gif',
]

const kissez = [
'./Images/kiss1.gif',
'./Images/kiss2.gif',
'./Images/kiss3.gif',
'./Images/kiss4.gif',
'./Images/kiss5.gif',
'./Images/kiss6.gif',
'./Images/kiss7.gif',
'./Images/kiss8.gif',
'./Images/kiss9.gif',
'./Images/kiss10.gif',
'./Images/kiss11.gif',
'./Images/kiss12.gif',
'./Images/kiss13.gif',
]

const patz = [
'./Images/pat1.gif',
'./Images/pat2.gif',
'./Images/pat3.gif',
'./Images/pat4.gif',
'./Images/pat5.gif',
'./Images/pat6.gif',
'./Images/pat7.gif',
]

const cryz = [
'./Images/cry1.gif',
'./Images/cry2.gif',
'./Images/cry3.gif',
'./Images/cry4.gif',
'./Images/cry5.gif',
'./Images/cry6.gif',
'./Images/cry7.gif',
'./Images/cry8.gif',
'./Images/cry9.gif',
'./Images/cry10.gif',
'./Images/cry11.gif',
]

const explodez = [
'./Images/bomb.gif',
'./Images/bomb1.gif',
'./Images/bomb2.gif',
'./Images/bomb3.gif',
'./Images/bomb4.gif',
'./Images/bomb5.gif',
'./Images/bomb6.gif',
'./Images/bomb7.gif',
]

const arsoz = [
'./Images/fire1.gif',
'./Images/fire2.gif',
'./Images/fire3.gif',
'./Images/fire4.gif',
'./Images/fire5.gif',
'./Images/fire6.gif',
'./Images/fire7.gif',
]

const vibez = [
'./Images/vibecheck1.gif',
'./Images/vibecheck2.gif',
'./Images/vibecheck3.gif',
'./Images/vibecheck4.gif',
'./Images/vibecheck5.gif',
'./Images/vibecheck6.gif',
'./Images/vibecheck7.gif',
'./Images/vibecheck8.gif',
'./Images/vibecheck9.gif',
'./Images/vibecheck10.gif',
'./Images/vibecheck11.gif',
'./Images/vibecheck12.gif',
'./Images/vibecheck13.gif',
'./Images/vibecheck14.gif',
'./Images/vibecheck15.gif',
'./Images/vibecheck16.gif',
'./Images/vibecheck17.gif',
'./Images/vibecheck18.gif',
'./Images/vibecheck19.gif',
'./Images/vibecheck20.gif',
]

const hugz = [
'this is a vile gesture, how could you?',
"we can't be friends ;-;",
"get out of my sight!",
'why do you torture me in this way?',
'I donut understand this public display of affection',
]

const hugsz = [
'./Images/hug1.gif',
'./Images/hug2.gif',
'./Images/hug3.gif',
'./Images/hug4.gif',
'./Images/hug5.gif',
'./Images/hug6.gif',
'./Images/hug7.gif',
'./Images/hug8.gif',
'./Images/hug9.gif',
'./Images/hug10.gif',
'./Images/hug11.gif',
'./Images/hug12.gif',
'./Images/hug13.gif',
'./Images/hug14.gif',
'./Images/hug15.gif',
'./Images/antihug1.gif',
'./Images/antihug2.gif',
'./Images/antihug3.gif',
'./Images/antihug4.gif',
'./Images/antihug5.gif',
]

const punchez = [
'./Images/punch1.gif',
'./Images/punch2.gif',
'./Images/punch3.gif',
'./Images/punch4.gif',
'./Images/punch5.gif',
'./Images/punch6.gif',
'./Images/punch7.gif',
'./Images/punch8.gif',
]

const heartz = [
':heart:',
':blue_heart:',
':yellow_heart:',
':purple_heart:',
':black_heart:',
':green_heart:',
':brown_heart:',
':orange_heart:',
':white_heart:',
]

const profanitiez = [
'shit',
'sh!t',
'bitch',
'ass',
'a$$',
'cunt',
'cock',
'dick',
'fuck',
'asshole',
'a$$hole',
'damn',
'goddamn',
'motherfucker',
'nigger',
'nigga',
]

const geraldz = [
'./Images/gerald1.gif',
'./Images/gerald2.gif',
'./Images/gerald3.gif',
'./Images/gerald4.gif',
]

const moodz = [
'./Images/mood1.gif',
'./Images/mood2.gif',
'./Images/mood3.gif',
]

const kickz = [
'./Images/kick1.gif',
'./Images/kick2.gif',
'./Images/kick3.gif',
'./Images/kick4.gif',
'./Images/kick5.gif',
'./Images/kick6.gif',
'./Images/kick7.gif',
'./Images/kick8.gif',
'./Images/kick9.gif',
'./Images/kick10.gif',
'./Images/kick11.gif',
'./Images/kick12.gif',
]
	
client.on ('guildMemberAdd', (member) => {
	const joinchannel = member.guild.channels.find('name', 'testing-grounds');
	joinchannel.send('DONUT BE ALARMED WE ARE EXTREMELY WEIRD AND SLIGHTLY INSANE!');
});

client.on ("message", (message) => {
	
	mention = message.mentions.users.first();
	msg = message.content.toLowerCase();
	var dice = {
  		sides: 6,
  		roll: function () {
    			var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    			return randomNumber;
 		}
	}	
  	var words = message.content.toLowerCase().trim().match(/\w+|\s+|[^\s\w]+/g);
  	var containsBadWord = words.some(word => {
    		return profanitiez.includes(word);
  	});
  	if (containsBadWord) {
    		message.delete(1);
    		message.channel.send("LANGUAGE <:Soap:436348198093586442>");
  	}
	
	if (message.content.startsWith (prefix + "hug")) {
		if (mention == null) {
			message.channel.send ("The void doesn't like to be hugged.");
		}else if (message.isMentioned(client.user)) {
			message.reply (hugz[Math.floor(Math.random() * hugz.length)]);
		}else{
			message.channel.send (mention + ", *cough* *gag* *hack*", {
				file: hugsz[Math.floor(Math.random() * hugsz.length)]
			});
		}
	}
	
	if (message.content.startsWith (prefix + "help")) {
		message.channel.send ("List of Commands ($): \nhello \noof \nsexyeggs \nvitoa \nshave \nyeet \nrip \nexplode \narso \ngerald \nmood \npoke \nvibecheck \nhug \npunch \nslap \ncuddle \nkiss \npat \nkick \ncry \nhowcool \nf");
	}
	
	if (message.content.startsWith (prefix + "hello")) {
		message.reply ("Hi!");
	}
	
	if (message.content.startsWith ("👀")) {
		message.channel.send (":eyes:");
	}
	
	if (message.content.includes ("murder")) {
		message.channel.send ("Did someone say murder? :knife:");
	}
	
	if (message.content.startsWith (prefix + "oof")) {
		message.channel.send (". . . . . . .     . . . . . . .     . . . . . . . \n.           .     .           .     . \n.           .     .           .     . . . . . \n. . . . . . .     . . . . . . .     .");
	}
	
	if (message.content.startsWith (prefix + "sexyeggs")) {
		//message.channel.send ("Thirsty, are we?", {files: ["./images/corset.jpg"]});	
		message.channel.send ("Thirsty, are we?", {
			file: sexyeggz[Math.floor(Math.random() * sexyeggz.length)]
		});
	}
	
	if (message.content.startsWith (prefix + "vitoa")) {
		if (mention == null) {
		message.reply ("Please wait while we gather our murder weapons...");
		message.channel.send ("3");
		message.channel.send ("2");
		message.channel.send ("1");
		message.channel.send (":bomb: :bomb: :bomb:");
		message.channel.send ("Thank you for your sacrifice. Please pick up your remains on your way out.");
		}else{
		message.channel.send (mention + ", please wait while we gather our murder weapons...");
		message.channel.send ("3");
		message.channel.send ("2");
		message.channel.send ("1");
		message.channel.send (":bomb: :bomb: :bomb:");
		message.reply("thank you for your sacrifice.");
		message.channel.send(mention + ", please pick up your remains on your way out.");
		}
	}
	
	if (message.content.startsWith (prefix + "shave")) {
		if (mention == null) {
		//Ruh roh! Tagged person is now a smooth baby butt!
			message.channel.send ("Did someone say shave?", {
				file: shavingz[Math.floor(Math.random() * shavingz.length)]
			});
		}else{
			message.channel.send (mention + " is now a smooth baby butt!", {
				file: shavingz[Math.floor(Math.random() * shavingz.length)]
			});
		}
			
	}
	
	if (message.content.startsWith (prefix + "yeet")) {
		message.channel.send ("YEET!", {
			file: yeetz[Math.floor(Math.random() * yeetz.length)]
		});	
	}
	
	if (message.content.startsWith (prefix + "rip")) {
		if (mention == null) {
			message.channel.send ("Rest in pieces :)", {
				file: ripz[Math.floor(Math.random() * ripz.length)]
			});
		}else{
			message.channel.send (mention + ", rest in pieces :)", {
				file: ripz[Math.floor(Math.random() * ripz.length)]
			});
		}
	}
	
	if (message.content.startsWith (prefix + "howcool")) {
		if (mention == null) {
			message.reply (" you are " + ( Math.floor(Math.random() * 100) + 1 ) + "% cool!");
		}else{
			message.channel.send (mention + " is " + ( Math.floor(Math.random() * 100) + 1 ) + "% cool!");
		}
	}
	
	if (message.content.startsWith (prefix + "f")) {
		if (mention == null) {
			message.reply (" you've paid your respects. " + heartz[Math.floor(Math.random() * heartz.length)]);
		}else{
			message.reply (" you've paid your respects for " + mention + ". " + heartz[Math.floor(Math.random() * heartz.length)]);
		}
	}
	
	if (message.content.startsWith (prefix + "punch")) {
		if (mention == null) {
			message.channel.send ("*The air punches back.*", {
				file: punchez[Math.floor(Math.random() * punchez.length)]
			});
		}else{
			message.channel.send (mention + ", did we hurt your stupid feelings? :P", {
				file: punchez[Math.floor(Math.random() * punchez.length)]
			});
		}
	}
	
	if (message.content.startsWith (prefix + "cry")) {
		message.channel.send ("Oh boohoo", {
			file: cryz[Math.floor(Math.random() * cryz.length)]
		});	
	}
	
	if (message.content.startsWith (prefix + "kick")) {
		if (mention == null) {
			message.channel.send ("You slip on a banana peel for you tried to mess with the void.");
		}else{
			message.channel.send (mention + ", FIGHT FIGHT FIGHT", {
				file: kickz[Math.floor(Math.random() * kickz.length)]
			});
		}
	}
	
	if (message.content.startsWith (prefix + "cuddle")) {
		if (mention == null) {
			message.channel.send ("*The void will remember this.*", {
				file: cuddlez[Math.floor(Math.random() * cuddlez.length)]
			});
		}else{
			message.channel.send (mention + ", I hope you suffocate. XD", {
				file: cuddlez[Math.floor(Math.random() * cuddlez.length)]
			});
		}
	}
	
	if (message.content.startsWith (prefix + "slap")) {
		if (mention == null) {
			message.channel.send ("*The void finds your slap to be pitiful.*", {
				file: slapz[Math.floor(Math.random() * slapz.length)]
			});
		}else{
			message.channel.send (mention + ", I believe that was an improvement.", {
				file: slapz[Math.floor(Math.random() * slapz.length)]
			});
		}
	}
	
	if (message.content.startsWith (prefix + "poke")) {
		if (mention == null) {
			message.channel.send ("Attack of the phalanges!", {
				file: pokez[Math.floor(Math.random() * pokez.length)]
			});
		}else{
			message.channel.send (mention + ", are you annoyed yet?", {
				file: pokez[Math.floor(Math.random() * pokez.length)]
			});
		}
	}
	
	if (message.content.startsWith (prefix + "vibecheck")) {
		if (mention == null) {
			message.channel.send ("A vibe check is in order.", {
				file: vibez[Math.floor(Math.random() * vibez.length)]
			});
		}else{
			message.channel.send (mention + ", your vibe is currently under investigation.", {
				file: vibez[Math.floor(Math.random() * vibez.length)]
			});
		}
	}
	
	if (message.content.startsWith (prefix + "explode")) {
		if (mention == null) {
			message.channel.send ("BOOM!", {
				file: explodez[Math.floor(Math.random() * explodez.length)]
			});
		}else{
			message.channel.send (mention + " has met their imminent doom.", {
				file: explodez[Math.floor(Math.random() * explodez.length)]
			});
		}
	}
	
	if (message.content.startsWith (prefix + "arso")) {
		if (mention == null) {
			message.channel.send ("Grab the fire extinguisher on your way out.", {
				file: arsoz[Math.floor(Math.random() * arsoz.length)]
			});
		}else{
			message.channel.send (mention + " has caught fire!", {
				file: arsoz[Math.floor(Math.random() * arsoz.length)]
			});
		}
	}
	
	
	if (message.content.startsWith (prefix + "kiss")) {
		if (mention == null) {
			message.channel.send ("Are you so thirsty you feel the need to get it on with the void?", {
				file: kissez[Math.floor(Math.random() * kissez.length)]
			});
		}else{
			message.channel.send (mention + ", I apologize for the inconvenience.", {
				file: kissez[Math.floor(Math.random() * kissez.length)]
			});
		}
	}
	
	if (message.content.startsWith (prefix + "pat")) {
		if (mention == null) {
			message.channel.send ("The void is not amused.", {
				file: patz[Math.floor(Math.random() * patz.length)]
			});
		}else{
			message.channel.send (mention + ", pat pat I guess.", {
				file: patz[Math.floor(Math.random() * patz.length)]
			});
		}
	}
	
	if (message.content.startsWith (prefix + "gerald")) {
		message.channel.send ("#Gerald2020", {
			file: geraldz[Math.floor(Math.random() * geraldz.length)]
			});
	}
	
	if (message.content.startsWith (prefix + "mood")) {
		message.channel.send ("That's a big moof", {
			file: moodz[Math.floor(Math.random() * moodz.length)]
		});	
	}
	
	if(message.content.startsWith (prefix + 'duel')) {
    	//checks if the username to fight is in the message
    	let author1 = message.author.username;
    	let user = message.mentions.users.first();
    	if(!user) return message.reply("you did not specify who you would like to fight!");

    	//checks if the users is trying to fight themselves
    	if(user.id == message.author.id) return message.reply('you cannot fight yourself!');

    	//checks if the user is trying to fight the bot
    	if(user.bot ==  true)
        return message.reply('you cannot fight a bot!');

    	//saves the two user ids to variables
    	var fighter1 = message.author.id;
    	var fighter2 = user.id;

    	//announces challenge and awaits response
    	var challenged = user.toString();
    	message.channel.send(`${challenged}, ${author1} has challenged you to a duel. Do you accept the challenge, yes or no?`)
        	.then(() => {
            	message.channel.awaitMessages(response => response.content == 'yes' && response.author.id == fighter2 || response.content == 'no' && response.author.id == fighter2, {
                	max: 1,
                	time: 60000,
                	errors: ['time'],
            	})
            	.then((collected) => {
                	if (collected.first().content == 'yes') {
				var currentPlayer = message.author.id;
                    		message.channel.send(`${challenged} has accepted the challenge!`);
				duel(100, 100, currentPlayer);
               		}
                	else if(collected.first().content == 'no') {
                    		message.channel.send(`${challenged} has rejected you!`);
                	}
            	})
            	.catch(() => {
                	message.channel.send(`No response. Fight has been cancelled.`);
            	});
        });      
}
	//fighter2 goes first
//	function duel(fighter1health, fighter2health, currentPlayer) {
//		if (fighter1health == 0) {
//			message.channel.send("Game over!" + fighter2 + " wins!")
//			return;
//		}else if(fighter2health == 0) {
//			message.channel.send("Game over!" + fighter1 + " wins!")
//			return;
//		}
//		message.channel.send(currentPlayer + ', would you like to use a sword, spell, or heal?')
//		.then(() => {
//		message.channel.awaitMessages(response => response.content == 'sword' && response.author.id == currentPlayer || response.content == 'spell' && response.author.id == currentPlayer || response.content == 'heal' && response.author.id == currentPlayer, {
//			max: 1,
//		})})
//		.then((collected) => {
//			if (collected.first().content == 'sword') {
//				var result = dice.roll();
//				message.channel.send("You rolled a " + result);
//				if (result >= 4) {
//					message.channel.send ("You dealt 10 damage!");
//					if (currentPlayer = fighter1) {
//						fighter1health -= 10;
//						currentPlayer = fighter1
//						duel(fighter1health, fighter2health, currentPlayer);
//					}else{
//						fighter2health -= 10;
//						currentPlayer = fighter2
//						duel(fighter1health, fighter2health, currentPlayer);
//					}
//				}else{
//					message.channel.send ("Attack unsuccessful. You received 5 damage!");
//					if (currentPlayer = fighter1) {
//						fighter1health -= 5
//						currentPlayer = fighter1
//						duel(fighter1health, fighter2health, currentPlayer);
//					}else{
//						fighter2health -= 5;
//						currentPlayer = fighter2
//						duel(fighter1health, fighter2health, currentPlayer);
//					}
//				}
//			}
//		});
//	}

});

client.login (process.env.token);

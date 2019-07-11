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
]

const ripz = [
'./Images/rip.gif',
'./Images/rip1.gif',
'./Images/rip2.gif',
'./Images/rip3.gif',
'./Images/rip4.gif',
]

const explodez = [
'./Images/bomb.gif',
'./Images/bomb1.gif',
'./Images/bomb2.gif',
'./Images/bomb3.gif',
'./Images/bomb4.gif',
'./Images/bomb5.gif',
'./Images/bomb6.gif',
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

const hugz = [
'this is a vile gesture, how could you?',
"we can't be friends ;-;",
"get out of my sight!",
'why do you torture me in this way?',
'I donut understand this public display of affection',
]

const profanitiez = [
'shit',
'bitch',
'ass',
'cunt',
'cock',
'dick',
'fuck',
'asshole',
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
	
	if(message.content.includes("hug")) {
		if (message.isMentioned(client.user)) {
			message.reply (hugz[Math.floor(Math.random() * hugz.length)]);
	}}
	
	if (message.content.startsWith (prefix + "help")) {
		message.channel.send ("List of Commands ($): \nhello \noof \nsexyeggs \nvitoa \nshave \nyeet \nrip \nexplode \narso \ngerald");
	}
	
	if (message.content.startsWith (prefix + "hello")) {
		message.reply ("Hi!");
	}
	
	if (message.content.startsWith ("👀")) {
		message.channel.send (":eyes:");
	}
	if (message.content.startsWith ("<:blurry_eyes:585284438942941204>")) {
		message.channel.send ("<:blurry_eyes:585284438942941204>");
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
	
	if (message.content.startsWith (prefix + "gerald")) {
		message.channel.send ("#Gerald2020", {
			file: geraldz[Math.floor(Math.random() * geraldz.length)]
			});
	}
	if (message.content.includes("gerald")) {
		message.channel.send ("<:gerald:592209457682055178>");
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
//		})
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
//	})
	
});

client.login (process.env.token);

const discord = require ('discord.js');

var client = new discord.Client();

const token = "NTE1MzQ4MzcxMzg1NjE0MzM2.DtkVmg.ldTxTGpBdTfqSp99IqyTgMGNuqw";

client.on ("ready", () => {
	console.log("ready!");
	
	client.user.setActivity ("with your feelings");
});

const prefix = '$'

const sexyeggz = [
'./images/corset.jpg',
'./images/sexybras.jpg',
'./images/sexyeggs.png',
'./images/humpty.png',
'./images/tomabs.png',
'./images/zenabs.jpg',
'./images/tatumabs.jpg',
'./images/abs.jpg',
'./images/sexyregg.jpg',
'./images/moreabs.jpeg',
'./images/legabs.png',
'./images/jasonabs.jpg',
'./images/nickabs.jpg',
]

const shavingz = [
'./images/shave1.gif',
'./images/shave2.gif',
'./images/shave3.gif',
'./images/shave4.gif',
'./images/shave5.gif',
'./images/shave6.gif',
'./images/shaving.gif',
]

const yeetz = [
'./images/yeet.gif',
'./images/yeet1.gif',
'./images/yeet2.gif',
]

const ripz = [
'./images/rip.gif',
'./images/rip1.gif',
'./images/rip2.gif',
'./images/rip3.gif',
'./images/rip4.gif',
]

const explodez = [
'./images/bomb.gif',
'./images/bomb1.gif',
'./images/bomb2.gif',
'./images/bomb3.gif',
'./images/bomb4.gif',
'./images/bomb5.gif',
'./images/bomb6.gif',
]

const arsoz = [
'./images/fire1.gif',
'./images/fire2.gif',
'./images/fire3.gif',
'./images/fire4.gif',
'./images/fire5.gif',
'./images/fire6.gif',
'./images/fire7.gif',
]

const hugz = [
'this is a vile gesture, how could you?',
"we can't be friends ;-;",
"get out of my sight!",
'why do you torture me in this way?',
'I donut understand this public display of affection',
]

client.on ('guildMemberAdd', (member) => {
	const joinchannel = member.guild.channels.find('name', 'testing-grounds');
	joinchannel.send('DONUT BE ALARMED WE ARE EXTREMELY WEIRD AND SLIGHTLY INSANE!');
});

client.on ("message", (message) => {
	
	mention = message.mentions.users.first();
	
	if(message.content.includes("hug")) {
		if (message.isMentioned(client.user)) {
			message.reply (hugz[Math.floor(Math.random() * hugz.length)]);
	}}
	
	if (message.content.startsWith (prefix + "help")) {
		message.channel.send ("List of Commands ($): \nhello \noof \nsexyeggs \nvitoa \nshave \nyeet \nrip \nexplode \narso");
	}
	
	if (message.content.startsWith (prefix + "hello")) {
		message.reply ("Hi!");
	}
	
	if (message.content.startsWith ("👀")) {
		message.channel.send (":eyes:");
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
});

client.login (token);
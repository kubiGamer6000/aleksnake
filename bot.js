const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', async (msg) => {
	if (msg.author.bot) return;
	if (msg.channel.id == '695710167077224468') {
		if (msg.content.startsWith('-update')) {
			const args = msg.content.split('|').slice(1);
			if (args.length >= 2) {
				const newMsg = await msg.channel.send(
					new Discord.MessageEmbed()
						.setTitle(args[0])
						.setColor(0x9b59b6)
						.setDescription('Server update')
						.addField('Info', args[1])
						.setFooter('Bro Mekica')
				);
				msg.delete();
			}
		}
	}
	if (msg.content.toLowerCase() == 'bro' || msg.content.toLowerCase() == 'бро') msg.channel.send('mekica');
});

bot.login(process.env.BOT_TOKEN);

require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) =>{
    console.log(`${c.user.tag} is online.`);
});
client.on('messageCreate', (message) => {
    if (message.content === 'hug?') {
        message.reply(`YES :pleading_face:`);
    }
});
client.on('messageCreate', (message) => {
    if (message.content === 'lazy') {
        message.reply(`Aren't we all lazy?`);
    }
});
client.login(process.env.TOKEN);

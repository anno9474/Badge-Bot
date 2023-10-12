require('dotenv').config();
const { Client, IntentsBitField, GuildChannel} = require('discord.js');
let counter = 1;

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
   if (message.content.toLowerCase() === '!fizzbuzz start') {
       counter = 1;
       message.reply(`Let's play **FizzBuzz** \n Me first: 1`);
       counter++;
   } else if (message.content.toLowerCase() === '!fizzbuzz stop') {
       message.reply('Game stopped.');
       counter = 1;
   } else {
       const content = message.content.toLowerCase();
       let expected = '';

       if (counter % 3 === 0 && counter % 5 === 0) {
           expected = 'fizzbuzz';
       } else if (counter % 3 === 0 ) {
           expected = 'fizz';
       } else if (counter % 5 === 0) {
           expected = 'buzz';
       } else {
           expected = counter.toString();
       }

       if (content === expected) {
           counter++
           let next = '';

           if (counter % 3 === 0 && counter % 5 === 0) {
               next = 'FizzBuzz';
           } else if (counter % 3 === 0) {
               next = 'Fizz';
           } else if (counter % 5 === 0) {
               next = 'Buzz';
           } else {
               next = counter;
           }

           message.reply(`:tada:**Correct!**:tada: The next number is ${next}.`);
           counter++;
       } else {
           message.reply(`:no_entry_sign:**Wrong**:no_entry_sign: The correct answer was ${expected}.`);
       }
   }
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

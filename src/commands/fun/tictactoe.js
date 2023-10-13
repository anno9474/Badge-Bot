const { SlashCommandBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tictactoe')
        .setDescription('A simple Tic Tac Toe Game for two player'),
    async execute(interaction) {

        const first_button = new ButtonBuilder()
            .setCustomId('first_button')
            .setLabel(' ')
            .setStyle(ButtonStyle.Secondary);

        const second_button = new ButtonBuilder()
            .setCustomId('second_button')
            .setLabel(' ')
            .setStyle(ButtonStyle.Secondary);

        const third_button = new ButtonBuilder()
            .setCustomId('third_button')
            .setLabel(' ')
            .setStyle(ButtonStyle.Secondary);

        const row = new ActionRowBuilder()
            .addComponents(first_button, second_button, third_button);

        await interaction.reply({
            content: "Let's Play!",
            components: [row],
        });
    },
};
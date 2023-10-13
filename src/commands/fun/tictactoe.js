const { SlashCommandBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tictactoe')
        .setDescription('A simple Tic Tac Toe Game for two player'),
    async execute(interaction) {

        const first_button = new ButtonBuilder()
            .setCustomId('first_button')
            .setLabel('First!')
            .setStyle(ButtonStyle.Danger);

        const second_button = new ButtonBuilder()
            .setCustomId('second_button')
            .setLabel('Second!')
            .setStyle(ButtonStyle.Primary);

        const row = new ActionRowBuilder()
            .addComponents(first_button, second_button);

        const secondRow = new ActionRowBuilder()
            .addComponents(second_button, first_button);

        await interaction.reply({
            content: "Let's Play!",
            components: [row, secondRow],
        });
    },
};
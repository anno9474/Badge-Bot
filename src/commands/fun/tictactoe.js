const { SlashCommandBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tictactoe')
        .setDescription('A simple Tic Tac Toe Game for two players'),
    async execute(interaction) {
        let actionRows = [];

        for (let i = 0; i < 3; i++) {
            const row = new ActionRowBuilder();
            for (let j = 0; j < 3; j++) {
                const button = new ButtonBuilder()
                    .setCustomId(`tic_${i}_${j}`)
                    .setLabel('-')
                    .setStyle(ButtonStyle.Secondary);
                row.addComponents(button);
            }
            actionRows.push(row);
        }

        await interaction.reply({
            content: "Let's Play!",
            components: actionRows,
        });
    },
};

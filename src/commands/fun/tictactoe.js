const { SlashCommandBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tictactoe')
        .setDescription('A simple Tic Tac Toe Game for two player'),
    async execute(interaction) {

        let buttonsArray = [];

        for (let i = 0; i < 3; i++) {
            let rowButtons = [];
            for (let j = 0; j < 3; j++) {
                const button = new ButtonBuilder()
                    .setCustomId(`tic_${i}_${j}`)
                    .setLabel('-')
                    .setStyle(ButtonStyle.Secondary);
                rowButtons.push(button);
            }
            buttonsArray.push(rowButtons);
        }

        const firstRow = new ActionRowBuilder()
            .addComponents(buttonsArray[0], buttonsArray[1], buttonsArray[2]);
        const secondRow = new ActionRowBuilder()
            .addComponents(buttonsArray[3], buttonsArray[4], buttonsArray[5]);
        const thirdRow = new ActionRowBuilder()
            .addComponents(buttonsArray[6], buttonsArray[7], buttonsArray[8]);

        await interaction.reply({
            content: "Let's Play!",
            components: [firstRow, secondRow, thirdRow],
        });
    },
};
const { SlashCommandBuilder, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tictactoe')
        .setDescription('A simple Tic Tac Toe Game for two player'),
    async execute(interaction) {

        const buttons = [];
        for (let i = 0; i < 3; i++) {
            const row = new MessageActionRow();
            for (let j = 0; j < 3; j++) {
                const button = new MessageButton()
                    .setCustomId(`tic_${i}_${j}`)
                    .setLabel(' ')
                    .setStyle('SECONDARY');
                row.addComponents(button);
            }
            buttons.push(row);
        }

        await interaction.reply({ content: "Let's Play!", components: buttons});
    },
};
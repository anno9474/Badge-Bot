const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder, ComponentType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gender')
        .setDescription('Pick what you want!'),
    execute: async function (interaction) {
        const select = new StringSelectMenuBuilder()
            .setCustomId('gender')
            .setPlaceholder('Tell me your Gender!')
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('Male')
                    .setDescription('Male by birth or by choice')
                    .setValue('male'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Female')
                    .setDescription('Female by birth or by choice')
                    .setValue('female'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('custom')
                    .setDescription('Human being, all I need to know')
                    .setValue('custom'),
            );

        const row = new ActionRowBuilder()
            .addComponents(select);

        const response = await interaction.reply({
            content: 'Choose your Gender!',
            components: [row],
        });

        const collector = response.createMessageComponentCollector({
            componentType: ComponentType.StringSelect,
            time: 3_600_000
        });

        collector.on('collect', async i => {
            const selection = i.values[0];
            await i.reply(`${i.user} has selected ${selection}!`);
        });
    },
};
const { EmbedBuilder } = require("discord.js");
const { SuccessEmbed } = require("../../contracts/embedHandler.js");

module.exports = {
  name: "unmute",
  description: "Unmutes the given user.",
  moderatorOnly: true,
  requiresBot: true,
  options: [
    {
      name: "name",
      description: "Minecraft Username",
      type: 3,
      required: true,
    },
  ],

  execute: async (interaction) => {
    const name = interaction.options.getString("name");
    bot.chat(`/g unmute ${name}`);

    const embed = new SuccessEmbed(`Successfully unmuted \`${name}\`.`);

    await interaction.followUp({
      embeds: [embed],
    });
  },
};

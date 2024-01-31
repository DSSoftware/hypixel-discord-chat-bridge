const { SuccessEmbed } = require("../../contracts/embedHandler.js");

module.exports = {
  name: "demote",
  description: "Demotes the given user by one guild rank.",
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
    bot.chat(`/g demote ${name}`);

<<<<<<< HEAD
    const embed = new EmbedBuilder()
      .setColor(5763719)
      .setAuthor({ name: "Demote" })
      .setDescription(`Successfully executed \`/g demote ${name}\``)
      .setFooter({
        text: "/help for more info",
        iconURL: config.minecraft.API.SCF.logo,
      });
=======
    const embed = new SuccessEmbed(`Successfully demoted \`${name}\` by one guild rank.`);
>>>>>>> main

    await interaction.followUp({
      embeds: [embed],
    });
  },
};

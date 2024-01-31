const { SuccessEmbed } = require("../../contracts/embedHandler.js");

module.exports = {
  name: "promote",
  description: "Promotes the given user by one guild rank.",
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
    bot.chat(`/g promote ${name}`);

<<<<<<< HEAD
    const embed = new EmbedBuilder()
      .setColor(5763719)
      .setAuthor({ name: "Promote" })
      .setDescription(`Successfully executed \`/g promote ${name}\``)
      .setFooter({
        text: "/help [command] for more information",
        iconURL: config.minecraft.API.SCF.logo,
      });
=======
    const embed = new SuccessEmbed(`Successfully promoted \`${name}\` by one guild rank.`);
>>>>>>> main

    await interaction.followUp({
      embeds: [embed],
    });
  },
};

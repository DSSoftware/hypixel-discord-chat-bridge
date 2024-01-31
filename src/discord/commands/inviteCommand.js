const { SuccessEmbed } = require("../../contracts/embedHandler.js");

module.exports = {
  name: "invite",
  description: "Invites the given user to the guild.",
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
    bot.chat(`/g invite ${name}`);

<<<<<<< HEAD
    const embed = new EmbedBuilder()
      .setColor(5763719)
      .setAuthor({ name: "Invite" })
      .setDescription(`Successfully executed \`/g invite ${name}\``)
      .setFooter({
        text: "/help [command] for more information",
        iconURL: config.minecraft.API.SCF.logo,
      });
=======
    const embed = new SuccessEmbed(`Successfully invited **${name}** to the guild.`);
>>>>>>> main

    await interaction.followUp({
      embeds: [embed],
    });
  },
};

const { SuccessEmbed } = require("../../contracts/embedHandler.js");

module.exports = {
  name: "mute",
  description: "Mutes the given user for a given amount of time.",
  moderatorOnly: true,
  requiresBot: true,
  options: [
    {
      name: "name",
      description: "Minecraft Username",
      type: 3,
      required: true,
    },
    {
      name: "time",
      description: "Time",
      type: 3,
      required: true,
    },
  ],

  execute: async (interaction) => {
    const [name, time] = [interaction.options.getString("name"), interaction.options.getString("time")];
    bot.chat(`/g mute ${name} ${time}`);

<<<<<<< HEAD
    const embed = new EmbedBuilder()
      .setColor(5763719)
      .setAuthor({ name: "Mute" })
      .setDescription(`Successfully executed \`/g mute ${name} ${time}\``)
      .setFooter({
        text: "/help [command] for more information",
        iconURL: config.minecraft.API.SCF.logo,
      });
=======
    const embed = new SuccessEmbed(`Successfully muted **${name}** for ${time}.`);
>>>>>>> main

    await interaction.followUp({
      embeds: [embed],
    });
  },
};

const { SuccessEmbed } = require("../../contracts/embedHandler.js");

module.exports = {
  name: "execute",
  description: "Executes commands as the minecraft bot.",
  moderatorOnly: true,
  requiresBot: true,
  options: [
    {
      name: "command",
      description: "Minecraft Command",
      type: 3,
      required: true,
    },
  ],

  execute: async (interaction) => {
    const command = interaction.options.getString("command");
    bot.chat(`/${command}`);

<<<<<<< HEAD
    const commandMessage = new EmbedBuilder()
      .setColor(2067276)
      .setTitle("Command has been executed successfully")
      .setDescription(`\`/${command}\`\n`)
      .setFooter({
        text: "/help for more info",
        iconURL: config.minecraft.API.SCF.logo,
      });
=======
    const commandMessage = new SuccessEmbed(`Successfully executed \`/${command}\``);
>>>>>>> main

    await interaction.followUp({ embeds: [commandMessage], ephemeral: true });
  },
};

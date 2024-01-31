const app = require("./../../Application.js");
const { Embed } = require("../../contracts/embedHandler.js");

module.exports = {
  name: "restart",
  description: "Restarts the bot.",
  moderatorOnly: true,

  execute: async (interaction) => {
<<<<<<< HEAD
    const user = interaction.member;
    if (
      config.discord.commands.checkPerms === true &&
      !(user.roles.cache.has(config.discord.commands.commandRole) || config.discord.commands.users.includes(user.id))
    ) {
      throw new HypixelDiscordChatBridgeError("You do not have permission to use this command.");
    }
    const restartEmbed = new EmbedBuilder()
      .setColor(15548997)
      .setTitle("Restarting...")
      .setDescription("The bot is restarting. This might take few seconds.")
      .setFooter({
        text: "/help [command] for more information",
        iconURL: config.minecraft.API.SCF.logo,
      });
=======
    const restartEmbed = new Embed(15548997, "Restarting...", "The bot is restarting. This might take few seconds.", {
      text: `by @george_filos | /help [command] for more information`,
      iconURL: "https://cdn.discordapp.com/avatars/177083022305263616/4ee1d5f278a36a61aa9164b9263c8722.webp",
    });
>>>>>>> main

    interaction.followUp({ embeds: [restartEmbed] });

    await bot.end("restart");
    await client.destroy();

    app.register().then(() => {
      app.connect();
    });

<<<<<<< HEAD
    const successfulRestartEmbed = new EmbedBuilder()
      .setColor(2067276)
      .setTitle("Restart Successful!")
      .setDescription("The bot has been restarted successfully.")
      .setFooter({
        text: "/help [command] for more information",
        iconURL: config.minecraft.API.SCF.logo,
      });
=======
    const successfulRestartEmbed = new Embed(2067276, "Success!", "The bot has been restarted successfully.", {
      text: `by @george_filos | /help [command] for more information`,
      iconURL: "https://cdn.discordapp.com/avatars/177083022305263616/4ee1d5f278a36a61aa9164b9263c8722.webp",
    });
>>>>>>> main

    interaction.followUp({ embeds: [successfulRestartEmbed] });
  },
};

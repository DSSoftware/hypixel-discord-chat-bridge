const { Embed } = require("../../contracts/embedHandler.js");
const app = require("./../../Application.js");

module.exports = {
  name: "restart",
  description: "Restarts the bot.",
  moderatorOnly: true,

  execute: async (interaction) => {
    const user = interaction.member;

    const restartEmbed = new Embed(15548997, "Restarting...", "The bot is restarting. This might take few seconds.");

    interaction.followUp({ embeds: [restartEmbed] });

    await bot.end("restart");
    await client.destroy();

    app.register().then(() => {
      app.connect();
    });

    const successfulRestartEmbed = new Embed(2067276, "Success!", "The bot has been restarted successfully.");

    interaction.followUp({ embeds: [successfulRestartEmbed] });
  },
};

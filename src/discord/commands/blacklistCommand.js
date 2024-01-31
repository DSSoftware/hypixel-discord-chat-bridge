const HypixelDiscordChatBridgeError = require("../../contracts/errorHandler.js");
const { SuccessEmbed } = require("../../contracts/embedHandler.js");

module.exports = {
  name: "blacklist",
<<<<<<< HEAD
  description: "Blacklists the user from using the bot.",
=======
  description: "Demotes the given user by one guild rank.",
  moderatorOnly: true,
  requiresBot: true,
>>>>>>> main
  options: [
    {
      name: "arg",
      description: "Add or Remove",
      type: 3,
      required: true,
      choices: [
        {
          name: "Add",
          value: "add",
        },
        {
          name: "Remove",
          value: "remove",
        },
      ],
    },
    {
      name: "name",
      description: "Minecraft Username",
      type: 3,
      required: true,
    },
  ],

  execute: async (interaction) => {
    const name = interaction.options.getString("name");
    const arg = interaction.options.getString("arg").toLowerCase();

    if (arg == "add") {
      bot.chat(`/ignore add ${name}`);
    } else if (arg == "remove") {
      bot.chat(`/ignore remove ${name}`);
    } else {
      throw new HypixelDiscordChatBridgeError("Invalid Usage: `/ignore [add/remove] [name]`.");
    }

<<<<<<< HEAD
    const embed = new EmbedBuilder()
      .setColor(5763719)
      .setAuthor({ name: "Blacklist" })
      .setDescription(`Successfully executed \`/ignore ${arg} ${name}\``)
      .setFooter({
        text: "/help for more info",
        iconURL: config.minecraft.API.SCF.logo,
      });
=======
    const embed = new SuccessEmbed(
      `Successfully ${arg == "add" ? "added" : "removed"} \`${name}\` ${arg == "add" ? "to" : "from"} the blacklist.`
    );
>>>>>>> main

    await interaction.followUp({
      embeds: [embed],
    });
  },
};

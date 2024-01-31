const HypixelDiscordChatBridgeError = require("../../contracts/errorHandler.js");
// eslint-disable-next-line no-unused-vars
const { EmbedBuilder, CommandInteraction } = require("discord.js");
const config = require("../../../config.json");
const Logger = require("../.././Logger.js");
const { ErrorEmbed } = require("../../contracts/embedHandler.js");

module.exports = {
  name: "interactionCreate",
  /**
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    try {
      if (interaction.isChatInputCommand()) {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});

        const command = interaction.client.commands.get(interaction.commandName);
        if (command === undefined) {
          return;
        }

        if (command.moderatorOnly === true && isModerator(interaction) === false) {
          throw new HypixelDiscordChatBridgeError("You don't have permission to use this command.");
        }

        if (command.requiresBot === true && isBotOnline() === false) {
          throw new HypixelDiscordChatBridgeError("Bot doesn't seem to be connected to Hypixel. Please try again.");
        }

        Logger.discordMessage(`${interaction.user.username} - [${interaction.commandName}]`);
        await command.execute(interaction);
      }
    } catch (error) {
      console.log(error);

      const errrorMessage =
<<<<<<< HEAD
        error instanceof HypixelDiscordChatBridgeError === false
          ? "Please try again later. The error has been sent to the Developers.\n\n"
          : "";
      const errorEmbed = new EmbedBuilder()
        .setColor(15548997)
        .setAuthor({ name: "An Error has occurred" })
        .setDescription(`${errrorMessage}\`\`\`${error}\`\`\``)
        .setFooter({
          text: "/help [command] for more information",
          iconURL: config.minecraft.API.SCF.logo,
        });
=======
        error instanceof HypixelDiscordChatBridgeError
          ? ""
          : "Please try again later. The error has been sent to the Developers.\n\n";

      const errorEmbed = new ErrorEmbed(`${errrorMessage}\`\`\`${error}\`\`\``);
>>>>>>> main

      await interaction.editReply({ embeds: [errorEmbed] });

      if (error instanceof HypixelDiscordChatBridgeError === false) {
<<<<<<< HEAD
        const errorLog = new EmbedBuilder()
          .setColor(15158332)
          .setTitle("Error")
          .setDescription(
            `Command: \`${interaction.commandName}\`\nOptions: \`${JSON.stringify(
              interaction.options.data
            )}\`\nUser ID: \`${interaction.user.id}\`\nUser: \`${
              interaction.user.username ?? interaction.user.tag
            }\`\n\`\`\`${error.stack}\`\`\``
          )
          .setFooter({
            text: "/help [command] for more information",
            iconURL: config.minecraft.API.SCF.logo,
          });
=======
        const username = interaction.user.username ?? interaction.user.tag ?? "Unknown";
        const commandOptions = JSON.stringify(interaction.options.data) ?? "Unknown";
        const commandName = interaction.commandName ?? "Unknown";
        const errorStack = error.stack ?? error ?? "Unknown";
        const userID = interaction.user.id ?? "Unknown";
>>>>>>> main

        const errorLog = new ErrorEmbed(
          `Command: \`${commandName}\`\nOptions: \`${commandOptions}\`\nUser ID: \`${userID}\`\nUser: \`${username}\`\n\`\`\`${errorStack}\`\`\``
        );
        interaction.client.channels.cache.get(config.discord.channels.loggingChannel).send({
          content: `<@&${config.discord.commands.commandRole}>`,
          embeds: [errorLog],
        });
      }
    }
  },
};

function isBotOnline() {
  if (bot === undefined || bot._client.chat === undefined) {
    return false;
  }

  return true;
}

function isModerator(interaction) {
  const user = interaction.member;
  const userRoles = user.roles.cache.map((role) => role.id);

  if (
    config.discord.commands.checkPerms === true &&
    !(userRoles.includes(config.discord.commands.commandRole) || config.discord.commands.users.includes(user.id))
  ) {
    return false;
  }

  return true;
}

const { SuccessEmbed } = require("../../contracts/embedHandler.js");

module.exports = {
  name: "kick",
  description: "Kick the given user from the Guild.",
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
      name: "reason",
      description: "Reason",
      type: 3,
      required: true,
    },
  ],

  execute: async (interaction) => {
<<<<<<< HEAD
    const user = interaction.member;
    if (
      config.discord.commands.checkPerms === true &&
      !(user.roles.cache.has(config.discord.commands.commandRole) || config.discord.commands.users.includes(user.id))
    ) {
      throw new HypixelDiscordChatBridgeError("You do not have permission to use this command.");
    }

    const [name, reason] = [
      interaction.options.getString("user") ?? interaction.options.getString("name"),
      interaction.options.getString("reason"),
    ];
    bot.chat(`/g kick ${name} ${reason}`);

    const embed = new EmbedBuilder()
      .setColor(5763719)
      .setAuthor({ name: "Kick" })
      .setDescription(`Successfully executed \`/g kick ${name} ${reason}\``)
      .setFooter({
        text: "/help [command] for more information",
        iconURL: config.minecraft.API.SCF.logo,
      });
=======
    const [name, reason] = [interaction.options.getString("name"), interaction.options.getString("reason")];
    bot.chat(`/g kick ${name} ${reason}`);

    const embed = new SuccessEmbed(`Successfully kicked **${name}** from the guild.`);
>>>>>>> main

    await interaction.followUp({
      embeds: [embed],
    });
  },
};

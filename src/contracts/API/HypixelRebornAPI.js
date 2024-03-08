const HypixelAPIReborn = require("hypixel-api-reborn");
const config = require("../../../config.js");

const hypixel = new HypixelAPIReborn.Client(config.minecraft.API.hypixelAPIkey, {
  cache: true,
});

module.exports = hypixel;

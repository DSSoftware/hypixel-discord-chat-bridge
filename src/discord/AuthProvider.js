const config = require("../../config.json");
const axios = require("axios");

const SCF_GM_PERMS = {
  'manage_roles': true,
  'blacklist': true,
  'mc_demote': true,
  'execute': true,
  'invite': true,
  'kick': true,
  'mute': true,
  'mc_promote': true,
  'restart': true,
  'unmute': true
};

const MOD_PERMS = {
  'manage_roles': false,
  'blacklist': true,
  'mc_demote': true,
  'execute': false,
  'invite': true,
  'kick': true,
  'mute': true,
  'mc_promote': true,
  'restart': true,
  'unmute': true
};

const ADM_PERMS = {
  'manage_roles': true,
  'blacklist': true,
  'mc_demote': true,
  'execute': false,
  'invite': true,
  'kick': true,
  'mute': true,
  'mc_promote': true,
  'restart': true,
  'unmute': true
};

const DEFAULT_PERMS = {
  'manage_roles': false,
  'blacklist': false,
  'mc_demote': false,
  'execute': false,
  'invite': false,
  'kick': false,
  'mute': false,
  'mc_promote': false,
  'restart': false,
  'unmute': false
};

class CommandHandler {

  async permissionInfo(user) {
    let permissions = DEFAULT_PERMS;

    let permission_level = 0;
    let perm_name = "Member";
    let team = "None";
    let auth_provider = "SCF_INTERNAL";

    if(user.roles.cache.has('1048690255903072339') || user.roles.cache.has('1048690255903072340')){
      permission_level = 1;
      perm_name = "SCF Moderator";
      team = "SCF";
      auth_provider = "SCF_ROLES";

      permissions = MOD_PERMS;
    }

    if(user.roles.cache.has('1203459776667979808') || user.roles.cache.has('1048690255903072342') || user.roles.cache.has('1048690255903072343') || user.roles.cache.has('1048690255903072344')){
      permission_level = 3;
      perm_name = "SCF Admin";
      team = "SCF";
      auth_provider = "SCF_ROLES";

      permissions = ADM_PERMS;
    }

    if(config.discord.commands.users.includes(user.id)){
      permission_level = 5;
      perm_name = "SCF Guild Master";
      team = "SCF";
      auth_provider = "SCF_INTERNAL";

      permissions = SCF_GM_PERMS;
    }

    try {
      let player_info = await Promise.all([
        axios.get(
          `https://sky.dssoftware.ru/api.php?method=getPermissionsLevel&discord_id=${user.id}&api=${config.minecraft.API.SCF.key}`
        ),
      ]).catch((error) => {});

      player_info = player_info[0]?.data ?? {};

      if(player_info?.data?.exists){
        permission_level = player_info?.data?.permission_level ?? 0;
        team = player_info?.data?.team ?? "None";
        perm_name = "Role was assigned via permission command.";
        permissions = player_info?.permissions ?? DEFAULT_PERMS;

        auth_provider = "SCF_WEB";
      }
    } catch (e) {
      console.log("Permission API Down");
    }

    return {
      level: permission_level,
      name: perm_name,
      team: team,
      permissions: permissions,
      provider: auth_provider
    };
  }
}

module.exports = CommandHandler;

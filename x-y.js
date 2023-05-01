if (!message.member.permissions.has("ADMINISTRATOR")) return

const xRole = message.guild.roles.cache.find(role => role.id === "");
const yRole = message.guild.roles.cache.find(role => role.id === "");
message.guild.members.cache.forEach(member => {
  if(member.roles.cache.has(xRole.id)) {
    member.roles.add(yRole);
  }
})
  }

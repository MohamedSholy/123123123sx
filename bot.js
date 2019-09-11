const Discord = require('discord.js');
const client = new Discord.Client();


client.on('messageCreate', async(message) => {
  let prefix = '#';
  let args = message.cleanContent.split(' ');
  if (args[0] == `${prefix}clear`) {
    let botM = message.channel.guild.members.get(client.user.id);
    if (!message.member.hasPermission('manageMessages') || !botM.hasPermission('manageMessages')) return;
    let limit = !args[1] || isNaN(args[1]) || args[1] > 100 ? 100 : parseInt(args[1]);
    let msgs = await message.channel.purge(limit != 100 ? limit + 1 : limit);
    let msg = await message.channel.createMessage(`\`\`\`javascript\n${msgs != 100 ? msgs - 1 : msgs} message${msgs - 1 == 1 ? ' has' : 's have'} been deleted.\`\`\``);
    setTimeout(() => {
      msg.delete();
    }, 2000);
  }
});

client.on('message',zaid => {
   if(zaid.content === prefix + "closeroom") {
   if(!zaid.channel.guild) return zaid.channel.send('**This command is only done on servers**');
   if(!zaid.member.hasPermission('MANAGE_MESSAGES')) return zaid.channel.send('**:x: - No Permissions ! **');
    zaid.channel.overwritePermissions(zaid.guild.id, {
    SEND_MESSAGES: false
	}).then(() => {
    zaid.channel.send("**:white_check_mark: | Channel Closed :lock:**")
});
   }
   if(zaid.content === prefix + "openroom") {
   if(!zaid.channel.guild) return zaid.channel.send('**This command is only done on servers**');
   if(!zaid.member.hasPermission('MANAGE_MESSAGES')) return zaid.channel.send(**:x: - No Permissions ! **');
    zaid.channel.overwritePermissions(zaid.guild.id, {
    SEND_MESSAGES: true
    }).then(() => {
    zaid.channel.send("**:white_check_mark: | Channel Opened :unlock:**")
 });
 }      
});

client.login(process.env.BOT_TOKEN);

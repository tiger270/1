const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
var adminprefix = 'Y2'
console.log(`Your Bot Is Online `);



client.on("message", message => {
    if (message.content.startsWith(prefix + 'bc')) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n`);
  })
  message.channel.send(`**${message.guild.members.filter( m => m.presence.status !== 'all').size} Recived **`);
  message.delete();
  };
  });

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "obc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n`);
  })
   message.channel.send(`**${message.guild.members.filter(m => m.presence.status !== 'online').size} Recived **`); 
   message.delete(); 
  };     
  });


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء

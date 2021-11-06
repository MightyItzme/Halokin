
                (async()=>{
                //hello :) hehe
                let process = require('process');
                process.on('uncaughtException', function (err) {
                    console.log(err);
                  });
                  let Discord = require("discord.js")
let Database  = require("easy-json-database")
let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")
let logs = require("discord-logs")
                    require('events').EventEmitter.defaultMaxListeners = 50;
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/database.json`),
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        manager:null,
                        Inviter:null,
                        message:null,
                        notifer:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                        partials: ["REACTION"]
                    });
                    logs(s4d.client);         
                    var member_xp, member_level;

function colourRandom() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}


await s4d.client.login('OTA1NTAzMzg0MDUwNzM3MjMy.YYLBvg.AXJ6c66Ln6jZDD4dBWfgDyvhxZQ').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('ready', async () => {
  s4d.client.user.setPresence({status: "online",activities:[{name:'!!help',type:"COMPETING"}]});

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == 'Ping') {
    s4dmessage.channel.send({content:String('Pong')});
    s4dmessage.channel.send({content:String((s4d.client.ws.ping))});
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (!((s4dmessage.author).bot)) {
    member_xp = s4d.database.get(String(('xp-' + String(s4dmessage.member.id))));
    member_level = s4d.database.get(String(('level-' + String(s4dmessage.member.id))));
    if (!member_xp) {
      member_xp = 0;
    } else if (!member_level) {
      member_level = 0;
    }
    s4d.database.set(String(('xp-' + String(s4dmessage.member.id))), (member_xp + 1));
    member_xp = member_xp + 1;
    if (member_xp > 100) {
      s4d.database.set(String(('level-' + String(s4dmessage.member.id))), (member_level + 1));
      member_level = member_level + 1;
      s4dmessage.channel.send({content:String((['Congratulations, ',s4dmessage.author,'you jumped to level ',member_level,'!!'].join('')))});
    }
    if ((s4dmessage.content) == '!!level') {
      s4dmessage.channel.send({content:String(([s4dmessage.author,', you are currently level: ',member_level].join('')))});
    } else if ((s4dmessage.content) == '!!xp') {
      s4dmessage.channel.send({content:String(([s4dmessage.author,', you need ',100 - member_xp,' to jump to level ',member_level + 1].join('')))});
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!!tot') {
    s4dmessage.channel.send({content:String('Trick/Treats')});
    if ((s4dmessage.content) == 'Trick') {
      s4dmessage.channel.send({content:String('You choosed trick 1 point will be substract')});
      s4d.database.subtract(String('points'), parseInt(1));
      if ((s4dmessage.content) == 'Treats') {
        s4dmessage.channel.send({content:String('You received some candys and added 5 points')});
        s4d.database.add(String('points'), parseInt(5));
      }
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!!help') {
    let embed = new Discord.MessageEmbed()
       embed.setColor((colourRandom()));
      embed.setTitle('Commands List');
      embed.setDescription('Prefix is !!');
      embed.addField('Level','level,xp',);
      embed.addField('Fun','tot',);
      embed.addField('Trigger','Ping',);
      (s4dmessage.channel).send({embeds:[embed]});

  }

});

                    return s4d
                    })();
            
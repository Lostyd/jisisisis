var Discord = require("discord.js");

var fs = require('fs')
    , gm = require('gm').subClass({imageMagick: true});
var {Client, RichEmbed, Attachment} = require('discord.js');
global.dsbot = new Discord.Client();
dsbot.on('ready',function () {
//lvltext x74 y 144
    //lvlbar x261 y135
    //
    //https://cdn.discordapp.com/avatars/204590199932452864/5a27052d1bae9c25a885c77505f3210a.png
    gm('./image.png')
        .fontSize(80)
        .drawText(335, 29, "12")
        .fill('#ffffff')
        .stroke("#ffffff")
        .drawRectangle(34, 73, 589, 103, 40, 40)
        .fill('#8ef753')
        .stroke()
        .drawRectangle(34, 73, 236, 103, 40, 40)

        .write('./crazy.jpg', function (err) {
            if (!err){ console.log('crazytown has arrived');
                var embed = new RichEmbed()
                    .attachFile('./crazy.jpg');

                dsbot.guilds.get('540105720071323649').channels.get('541144879862906880').send('lol');
                dsbot.guilds.get('540105720071323649').channels.get('541144879862906880').send(embed);
            } else {
                console.log(err);
                dsbot.guilds.get('540105720071323649').channels.get('541144879862906880').send(""+ err+ "");
            }
        });

    console.log(`Logged in as ${dsbot.user.tag}!`);
});
dsbot.login(process.env.TOKEN);

var Discord = require("discord.js");

var fs = require('fs')
    , gm = require('gm').subClass({imageMagick: true});
var {Client, RichEmbed, Attachment} = require('discord.js');
global.dsbot = new Discord.Client();
dsbot.on('ready',function () {

    gm('image.png')
        .flip()
        .write('/crazy.jpg', function (err) {
            if (!err){ console.log('crazytown has arrived');
                dsbot.guilds.get('540105720071323649').channels.get('541144879862906880').send('crazytown has arrived');
            } else {
                console.log( dsbot.guilds.get('540105720071323649').channels.get('541144879862906880'));
                dsbot.guilds.get('540105720071323649').channels.get('541144879862906880').send(""+ err+ "");
            }
        });
    console.log(`Logged in as ${dsbot.user.tag}!`);
});
dsbot.login(process.env.TOKEN);

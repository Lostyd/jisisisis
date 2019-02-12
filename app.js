var Discord = require("discord.js");

var fs = require('fs')
    , gm = require('gm').subClass({imageMagick: true});
var {Client, RichEmbed, Attachment} = require('discord.js');
global.dsbot = new Discord.Client();
dsbot.on('ready',function () {

    gm('./image.jpg')
        .flip()
        .magnify()
        .rotate('green', 45)
        .blur(7, 3)
        .crop(300, 300, 150, 130)
        .edge(3)
        .write('./crazy.jpg', function (err) {
            var embed = new RichEmbed()
                .setColor(0x00AE86)
                .setDescription(setBar(a))
                .setImage("./crazy.jpg");                                                                        //|


            dsbot.guilds.get('540105720071323649').channels.get('541144879862906880').send(embed);
        });

    console.log(`Logged in as ${dsbot.user.tag}!`);
});
dsbot.login(process.env.TOKEN);

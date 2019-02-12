var Discord = require("discord.js");

var fs = require('fs')
    , gm = require('gm').subClass({imageMagick: true});
var {Client, RichEmbed, Attachment} = require('discord.js');
global.dsbot = new Discord.Client();
dsbot.on('ready',function () {

    gm('./image.png')
        .flip()
        .write('/crazy.jpg', function (err) {
            if (!err){ console.log('crazytown has arrived');
                var embed = new RichEmbed()
                    .setImage('./crazy.jpg');

                dsbot.guilds.get('540105720071323649').channels.get('541144879862906880').send('lol');
                dsbot.guilds.get('540105720071323649').channels.get('541144879862906880').send(embed);
            } else {
                console.log(err);
                dsbot.guilds.get('540105720071323649').channels.get('541144879862906880').send(""+ err+ "");
            }
        });


    gm('./image.jpg')
        .flip()
        .magnify()
        .rotate('green', 45)
        .blur(7, 3)
        .crop(300, 300, 150, 130)
        .edge(3)
        .write('./crazy.jpg', function (err) {
            var embed = new RichEmbed()
                .setTitle(`rank: ${rows.lvl}ᅠᅠᅠᅠᅠᅠᅠᅠᅠᅠᅠᅠᅠᅠexp: ${rows.exp}/${(nconf.get('startExp') * Math.pow(2, Number(rows.lvl) - 1))}`)
                .setAuthor(msg.author.username, msg.author.avatarURL)

                .setColor(0x00AE86)
                .setDescription(setBar(a))

                .setThumbnail("http://i.imgur.com/p2qNFag.png");                                                                        //|

            msg.channel.send(embed);
        });

    console.log(`Logged in as ${dsbot.user.tag}!`);
});
dsbot.login(process.env.TOKEN);

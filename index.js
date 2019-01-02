const Discord = require("discord.js");
const TOKEN = "NDQ4MTI3MDAwMzczMzYyNjg5.Dw68fA.zfFTYeSZIL2QJOWJ2s3hr6416mY";
const PREFIX = "..";
OUI = 1;

//mdp heroku = Baba78600*


var bot = new Discord.Client();

var servers = {};

var fortunes = ["biensurs", "bas oui trop", "si je répond tu vas être déçus", "fuck u", "je fais semblant de ne pas comprendre ^^", "non pd", 'nope', "je t'aime pas je répond pas", "mon maître ma interdit de répondre a sa", "mon maître me force de répondre oui a sa", "mon maitre me force de répondre non a sa"];


bot.on("guildMemberAdd", function(member) {


});

bot.on("ready", function(){
  console.log("logged in")

  bot.user.setActivity("laisse tomber tu peux pas l'use")

});
bot.on("message", function(msg){

  if(!msg.content.startsWith(PREFIX)) return;
  //if(msg.author.id != "205618555343863808") return;

  var args = msg.content.substring(PREFIX.length).split(" ");

  switch(args[0].toLowerCase()) {
    case "ping":
      msg.channel.sendMessage("Pong !");
      break;
    case "8ball":
      if(args[1]) msg.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
      else msg.channel.sendMessage("you forgot the question or i can't read that")
      break;
    case "info":
      msg.channel.sendMessage("i'm the slave of <@205618555343863808>");
      break;

    case "spam":
    OUI = 1;
    while(OUI == 1){
      bot.setInterval(()=>
      {
        msg.channel.sendMessage("je farm comme un bon capitaliste").then(i_msg => { i_msg.delete(1000); });


      },3000);
  };
    break;

    case "stop":
      msg.delete(1000)
      msg.channel.sendMessage("ok !").then(p_msg => { p_msg.delete(1000); });
      OUI = 0;
    break;

  case "test":

  break;

    case "help":
      var embed = new Discord.RichEmbed()
        .addField("..info", "information of the bot")
        .addField("..ping", "for saw if the bot working")
        .addField("..8ball", "add a question after the commands and the bot gon' answer randomly")
        .addField("..help", "that just show all the commands")
        .setThumbnail(bot.user.avatarURL)
      msg.channel.sendEmbed(embed);
      break;


    default:
      msg.channel.sendMessage("invalid commands : ..help")
  }});




bot.login(TOKEN);

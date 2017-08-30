const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const sql = require("sqlite");
sql.open("./omikuji.sqlite");
var async = require('async');

client.on('ready', () => {
  client.user.setGame('Make a wish!');
  console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', msg => {
  
  if (msg.isMentioned(client.user)) {
    msg.reply('Youkoso, are you here to make a wish? Or to enjoy the festival?');
    msg.channel.send('*It is the hour of the twilight, the tasogare-doki.*\nPlease choose your service: 1) `m!pray` 2) `m!ema` 3) `m!omamori` 4) `m!omikuji` 5) `m!shikigami` 6) `m!onsen` 7) `m!festival` 8) `m!help` 9) `m!exit`');
  }
  if (msg.content === config.prefix  + '!' +'pray') {
    msg.reply('Very well.');
    msg.channel.send('Here is the Torii, the entrance to the shrine.\nFirst you must purify yourself in order to meet Kami sama\nPlease come to this water basin and cleanse yourself with this holy water or the Komainu (stone dog statues guarding the entrance) will devour your soul.\nThis is the handle scoop, wash your left hand first, then your right hand. Use your left hand to wash your mouth, then wash your left hand.');
    msg.channel.send('Press `m!cont` to continue...');
  }
  if (msg.content === config.prefix  + '!' +'cont') {
    msg.channel.send('Please follow me up this path to the shrine.');
    msg.channel.send('Here’s the shrine, and the offering box under the bell. Please donate 5 yen.');
    msg.channel.send('Shake the rope connecting to the bell, take two bows, clap your hands twice and make a wish.');
    msg.channel.send('Make a wish! Press `m!wish` to continue...');
  }
  if (msg.content === config.prefix  + '!' +'wish') {
    msg.channel.send('If you’re finished, take a bow to show completion of the ritual.');
    msg.channel.send('Thank you for your generosity. May Kami sama hear your wish.');
  }
  if (msg.content === config.prefix  + '!' +'ema') {
    msg.channel.send('Here is an ema, a wooden board for writing your wish. I have a brush and ink too.\nAfter you’re done, you can hang it up in the stall to your left.');
  }
  if (msg.content === config.prefix  + '!' +'omamori') {
    msg.channel.send('We have omamori, a lucky charm. You can have them for divine protection, good health, interpersonal relationships, love, studies, and work.\nWhich one would you like?');
    msg.channel.send('Press `m!protection`, `m!health`, `m!relationships`, `m!love`, `m!studies`, `m!work`\nChoose the omamori you want to continue...');
  }
  if (msg.content === config.prefix  + '!' +'protection') {
    msg.channel.send('*gives you an omamori for divine protection*');
  }
  if (msg.content === config.prefix  + '!' +'health') {
    msg.channel.send('*gives you an omamori for good health*');
  }
  if (msg.content === config.prefix  + '!' +'relationships') {
    msg.channel.send('*gives you an omamori for interpersonal relationships*');
  }
  if (msg.content === config.prefix  + '!' +'love') {
    msg.channel.send('*gives you an omamori for love*');
  }
  if (msg.content === config.prefix  + '!' +'studies') {
    msg.channel.send('*gives you an omamori for studies*');
  }
  if (msg.content === config.prefix  + '!' +'work') {
    msg.channel.send('*gives you an omamori for work*');
  }
  if (msg.content === config.prefix  + '!' +'omikuji') {
    msg.channel.send('We have omikuji, which are fortune telling lottery sticks. It is a box of sticks that have fortune inscribed on them. Would you like to try?\nPlease shake this closed box. A wooden stick shall come out of the hole on top of the box.');
    msg.channel.send('Shake the box! Press `m!shake` to continue...');
  }
  if (msg.content === config.prefix  + '!' +'shake') {
          getOmikuji(msg);
  }
  if (msg.content === config.prefix  + '!' +'yes') {
    msg.channel.send('It is my honor to serve you. Please try our services again.');
  }
  if (msg.content === config.prefix  + '!' +'shikigami') {
    msg.channel.send('We have shikigami, which are people shaped paper for cleansing the soul from sins.');
    msg.channel.send('Please write your name on one of the shikigami with brush and ink.\nHold another clean shikigami in your mouth. Then leave the one with the name in the shrine, and exit the shrine to the Torii. Do not talk or look back till you reach the Torii.');
    msg.channel.send('Type `m!Torii` to show that you\'ve arrived to the entrance of the shrine.');
  }
  if (msg.content === config.prefix  + '!' +'Torii') {
    msg.channel.send('You have cleansed your soul and left your sins behind in the shrine.');
  }    
  if (msg.content === config.prefix  + '!' +'onsen') {
    msg.channel.send('There’s an onsen behind the shrine. \nIt is said whoever drinks from the spring will gain eternal youth.\nHere is some sake to enjoy while bathing. Enjoy!');
  }
  if (msg.content === config.prefix  + '!' +'festival') {
    msg.channel.send('Welcome to the Natsumatsuri. \nThis is a kazaguruma, a pinwheel, just for you. \nThe games we have here are goldfish scooping and balloon yoyos.\nWe sell ramune (a soda pop with a marble inside), takoyaki and raindrop cake.\nPlease enjoy!');
  }
  if (msg.content === config.prefix  + '!' +'help') {
    msg.channel.send('Q&A:\n`m!help-01`) Who is the Kami sama of this shrine? \n`m!help-02`) Why do we need to make a wish?\n`m!help-03`) What are the services? \n`m!help-04`) Where did the creator get her inspiration? \n`m!help-05`) What\'s the difference between a miko and a onmyoji?\n`m!help-06`) Who\'s the author of this bot?');
  }
  if (msg.content === config.prefix  + '!' +'help-01') {
    msg.channel.send('It\'s the shrine of Amaterasu-ōmikami, the goddess of the sun and the universe, mother of all.');
  }
  if (msg.content === config.prefix  + '!' +'help-02') {
    msg.channel.send('A wish is a seed of one\'s consciousness, which will grow into a tree. It is the root of all action. It is not merely a placebo effect, but strong magic. \nKami sama is here to aid those who are lost in their path. Please let her help you.');
  }
  if (msg.content === config.prefix  + '!' +'help-03') {
    msg.channel.send('1) Pray means perform the prayer ritual. \n2) An ema is a wooden board for writing your wish.\n3) Omamori is a lucky charm.\n4) Omikuji are fortune telling lottery sticks\n5) Shikigami is a ritual using people shaped paper for cleansing the soul from sins.\n6) Onsen is hot spring. \n7) Festival is the summer fest held at the Shinto Shrine.');
  }
  if (msg.content === config.prefix  + '!' +'help-04') {
    msg.channel.send('The creator is a great fan of 四ツ目神, a japanese rpg escape game. Please play it if you have time!');
  }
  if (msg.content === config.prefix  + '!' +'help-05') {
    msg.channel.send('A miko practices rituals. An onmyoji does exorcism.');
  }
  if (msg.content === config.prefix  + '!' +'help-06') {
    msg.channel.send('This is a bot created by Asuka Tae (飛鳥 妙) on 2017.07.29! Thank you for playing!');
  }
  if (msg.content === config.prefix  + '!' +'exit') {
    msg.channel.send('Please take your leave slowly. I wish you a safe journey!');
  }
});
async function getOmikuji(msg){
    var intStick = Math.floor(Math.random() * 223) + 1;
    await msg.channel.send('A stick comes out. It says no.' + intStick);
    await msg.channel.send('Your fortune reads:');
    await sql.get(`SELECT * FROM omikuji WHERE no =${intStick}`).then(row => {
      msg.channel.send(`${row.message}`);
    });
    await askIfPleased(msg);
}

async function askIfPleased(msg) {
  msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press `m!shake` again. If yes, press `m!yes`');
}

client.login(config.token);

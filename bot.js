const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

client.on('ready', () => {
  client.user.setGame('Make a wish!');
  console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', msg => {
  client.user.setGame('Make a wish!');

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
    var intStick = Math.floor(Math.random() * 194) + 1;
    msg.channel.send('A stick comes out. It says no.' + intStick);
    msg.channel.send('Your fortune reads:');
      switch(intStick) {
        case 1:
          msg.channel.send('*Waiting is a sign of true love and patience. Anyone can say I love you, but not everyone can wait and prove it\'s true*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 2:
          msg.channel.send('*Distance sometimes lets you know who’s worth keeping and who’s worth letting go.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 3:
          msg.channel.send('*Never play with the feelings of others. Because you may win the game but the risk is that you will surely lose the person for a lifetime.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 4:
          msg.channel.send('*The people who are meant to be in your life will always gravitate towards you, no matter how far they wander.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 5:
          msg.channel.send('*Keep going. No matter what you do, no matter how many times you screw up and think to yourself “there’s no point to carry on”, no matter how many people tell you that you can’t do it- keep going. Don’t quit. Don’t quit, because a month from now you will be that much closer to your goal than you are now. Yesterday you said tomorrow. Make today count.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 6:
          msg.channel.send('*Love doesn’t hurt. Lying, cheating and screwing with people’s feelings and emotions hurt. Don\'t play games with people\'s heads and hearts. Always be honest and genuine.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 7:
          msg.channel.send('*Success is connected with action. Successful people keep moving. They make mistakes, but they don’t quit.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 8:
          msg.channel.send('*Think positive. If you think you are beaten, you are. If you think you dare not, you don’t. Success begins with your own will. It’s all in your state of mind. Life’s battles are not always won by those who are stronger and faster. Sooner or later, the person who wins is the person who thinks they can.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 9:
          msg.channel.send('*Today I chose to live by choice, not by chance. To make changes, not excuses. To be motivated, not manipulated. To be useful, not used. To excel, not compete. I choose self-esteem, not self-pity. I choose to listen to the inner voice, not the random opinion of others.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 10:
          msg.channel.send('*A loser is not a person who fails once. A loser is a person who doesn’t have the guts to get up and try again.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 11:
          msg.channel.send('*As long as you’ve got passion, faith, and are willing to work hard, you can do anything and have anything you want in this world.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 12:
          msg.channel.send('*Courage doesn’t always roar. Sometimes courage is the little voice at the end of the day that says "I’ll try again tomorrow".*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 13:
          msg.channel.send('*As I began to love myself I found that anguish and emotional suffering are only warning signs that I was living against my own truth. Today, I know this is authenticity.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 14:
          msg.channel.send('*Be kind, work hard, stay humble, smile often, stay loyal, be honest, travel when possible, never stop learning, love always.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 15:
          msg.channel.send('*I am strong because I know my weakness. I am beautiful because I am aware of my flaws. I am fearless because I can tell reality from illusion. I am wise because I learn from my mistakes. I am a lover because I have felt hate. I can laugh because I have known sadness.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 16:
          msg.channel.send('*The relationship with yourself sets the tone for every other relationship you have.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 17:
          msg.channel.send('*Why fit in when you were born to stand out? You are amazing. You are important. You are special. You are unique. You are kind. You are precious. You are loved.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 18:
          msg.channel.send('*Sometimes all you need is twenty seconds of insane courage, literally twenty seconds of embarrassing bravery and I promise you, something great will come of it.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 19:
          msg.channel.send('*They say if you dream a thing more than once, it is sure to come true.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 20:
          msg.channel.send('*O soul steeped in darkness. Do not despair. All is not yet lost. come and confide in your Kami sama, who is love and mercy.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 21:
          msg.channel.send('*The more you can love your darkness, the more you can live your greatness.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 22:
          msg.channel.send('*Depression is no surprise to Kami sama and it does not cancel Her purpose for your life. You may be struggling, but you are not your struggle. You still are who Kami sama says you are. And this does not make you less of a person. You’re just as valuable and your story is not over.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 23:
          msg.channel.send('*You have been criticizing yourself for years, and it hasn’t worked. Try approving of yourself and see what happens.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 24:
          msg.channel.send('*Love is not about how much you say I love you, but how much you prove it is true.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
        case 25:
          msg.channel.send('*Loving ourselves through the process of owning our story is the bravest thing we will ever do.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 26:
          msg.channel.send('*To love yourself is to understand that you don’t need to be perfect to be good.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 27:
          msg.channel.send('*When you love what you have, you have everything you need.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 28:
          msg.channel.send('*Distance is just a test to see how far love can travel.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 29:
          msg.channel.send('*You are powerful beyond belief. Believe in yourself and the impossible becomes a word used only by non-believers.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 30:
          msg.channel.send('*Everything you’ve ever wanted is on the other side of fear.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 31:
          msg.channel.send('*Opportunity follows struggle. If follows effort. It follows hard work. It doesn’t come before.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 32:
          msg.channel.send('*The heart knows what it wants and wants what it wants. There’s no logic to these things. You meet someone and you fall in love and that’s that.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 33:
          msg.channel.send('*Passion is derived from a Latin word meaning to suffer, if you genuinely love something. You suffer for it.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 34:
          msg.channel.send('*The world is a dangerous place, not because of those who do evil, but because of those who look on and do nothing.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 35:
          msg.channel.send('*Not every day is a good day. Love anyway. Not all you love will love you back. Love anyway. Not everyone will tell the truth. Love anyway. Not all deals are fair. Play fair anyway.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 36:
          msg.channel.send('*If you love somebody, let them go, for if they return, they were always yours. If they don’t, they never were.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 37:
          msg.channel.send('*Love is our true destiny. We do not find he meaning of life by ourselves alone- we find it with another.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 38:
          msg.channel.send('*Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 39:
          msg.channel.send('*Kami sama doesn’t love a future version of you. She loves you for who you are.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 40:
          msg.channel.send('*Always do your best. Your best is going to change from moment to moment; it will be different when you are tired as opposed to well-rested. Under any circumstance, simply do your best, and you will avoid self-judgement, self-abuse, and regret.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 41:
          msg.channel.send('*People that shine from within don’t need the spotlight.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 42:
          msg.channel.send('*Let the beauty of what you love be what you do.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 43:
          msg.channel.send('*Do your thing. Do it unapologetically. Don’t be discouraged by criticism. You probably already know what they’re going to say. Pay no mind to the fear of failure. It’s far more valuable than success. Take ownership, take chances, and have fun. And no matter what, don’t ever stop doing your thing.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 44:
          msg.channel.send('*Every positive change in your life begins with a clear, unequivocal decision that you are going to either do something or stop doing something.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 45:
          msg.channel.send('*If you love someone, tell them because hearts are often broken by words left unspoken.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 46:
          msg.channel.send('*Love is trust, faith and loyalty. Finding your other half that condition in which the happiness of another person is essential to our own, a feeling shared with someone who loves you, the most beautiful of dreams, a place in one’s heart forever, what we make it unconditional holding you seeing you being with you in every single way*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 47:
          msg.channel.send('*The prettiest smilies hides the deepest secrets. The prettiest eyes have cried the most tears, and the kindest hearts have felt the most pain.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 48:
          msg.channel.send('*Success isn’t just what you accomplish in your life. It’s about what you inspire others to do.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 49:
          msg.channel.send('*You cannot disrespect the caterpillar and rave about the butterfly. Success comes from a humble background.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 50:
          msg.channel.send('*How people treat you is karma; how you react is yours.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 51:
          msg.channel.send('*You can’t start the next chapter of your life if you keep re-reading the last one.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 52:
          msg.channel.send('*Life has no remote. Get up and change it yourself.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 53:
          msg.channel.send('*Sometimes a heartbreak shakes you awake, and helps you see that you are worth more than what you were settling for.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 54:
          msg.channel.send('*Three simple rules in life: 1. If you do not go after what you want, you\'ll never have it; 2. If you do not ask, the answer will always be no; 3. If you do not step forward, you\'ll always be in the same place.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 55:
          msg.channel.send('*There are no coincidences in this world, only inevitability.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 56:
          msg.channel.send('*Love is comprised of three essential factors: intimacy, passion and commitment. Intimacy is the feeling of closeness, especially in communication, like sharing secrets. Passion is physical attraction. Commitment is a pledge of devotion to that sole person meant to be kept. If any of the key elements are missing, then you have not experienced true love.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 57:
          msg.channel.send('*Respect is earned. Honesty is appreciated. Trust is gained. Loyalty is returned.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 58:
          msg.channel.send('*Focus on the powerful, euphoric, magical, synchronistic, beautiful parts of life, and the universe will keep giving them to you.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 59:
          msg.channel.send('*It matters not what someone is born, but what they grow to be.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 60:
          msg.channel.send('*Before you diagnose yourself with depression or low-self esteem, first make sure you are not, in fact, just surrounded by assholes.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 61:
          msg.channel.send('*Keep your thoughts positive because your thoughts become your words. Keep our words positive because your words become your behavior. Keep your behavior positive because your behavior becomes your habits. Keep your habits positive because your habits become your values. Keep your values positive because your values become your destiny.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 62:
          msg.channel.send('*A tiger doesn’t lose sleep over opinion of sheep.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 63:
          msg.channel.send('*Kami sama never taught you to dislike yourself. Someone else taught you that.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 64:
          msg.channel.send('*Believe in yourself. You have to take that chance even if it’s hard, even if it doesn’t make sense. Just believe in yourself. Even if you don’t, pretend you do, and at some point, you will. With self-relief comes self-esteem.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 65:
          msg.channel.send('*Never play with someone’s feelings just because you’re unsure of your own.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 66:
          msg.channel.send('*The biggest coward is a man who awakens a woman’s love with no intention of loving her.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 67:
          msg.channel.send('*There are many things to play with. But people’s feelings and hearts are not one of them.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 68:
          msg.channel.send('*Sometimes we play with love, but when the time comes and we realize that you want to get serious, love plays with you.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 69:
          msg.channel.send('*When you can’t remember why you’re hurt, that’s when you’re healed.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 70:
          msg.channel.send('*Our prime purpose in this life is to help others. And if you can’t help them, at least don’t hurt them.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 71:
          msg.channel.send('*Telling someone how you feel does not hurt as much as not saying anything at all to that someone who is deeply in love with you.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 72:
          msg.channel.send('*Never waste your feelings on people who don’t value them.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 73:
          msg.channel.send('*Don’t be too confident when someone tells you they like you, the real question is until when? Because frankly just like seasons, people change and so do feelings.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 74:
          msg.channel.send('*You can’t just come into someone’s life, make then feel special, and then leave.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 75:
          msg.channel.send('*Love likes to play with people’s feelings, especially those who don’t believe in love.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 76:
          msg.channel.send('*Don’t play with a woman’s heart. Why mislead a good woman if you know you’re not going to love her the way she deserves to be loved?*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 77:
          msg.channel.send('*Just because someone desires you, it does not mean that they value you.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 78:
          msg.channel.send('*When you start seeing your worth, you’ll find it harder to stay around people who don’t.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 79:
          msg.channel.send('*Be sure to take your well-being into account when making decisions having to do with others.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 80:
          msg.channel.send('*Don’t be too sensitive. Your feelings can get hurt. Don’t be too insensitive. You can hurt people’s feelings.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 81:
          msg.channel.send('*Real love- if we go into relationships with ego we will lose every time. Ego forces you to pick people based on how they benefit you solely. Real love is an action that makes you want to serve them and put them first. Real love is not selfish, ever.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 82:
          msg.channel.send('*Most relationships fail because one person was being loved too much and the other wasn’t being loved enough.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 83:
          msg.channel.send('*If someone constantly makes you unhappy, then you must build up the courage to let that person go.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 84:
          msg.channel.send('*Detachment doesn’t mean not caring. It’s taking care of yourself first and letting others take responsibility for their actions without trying to save or punish them.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 85:
          msg.channel.send('*If we could look into each other’s hearts and understand the unique challenges each of us faces, we would treat each other much more gently, with more love, patience, tolerance and care.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 86:
          msg.channel.send('*I forgive you. Not for you, but for me. Because like chains shackling me to the past I will no longer pollute my heart with bitterness, fear, distrust or anger. I forgive you because hate is just another way of holding on, and you don’t belong here anymore.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 87:
          msg.channel.send('*Pride makes us artificial and humility makes us real.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 88:
          msg.channel.send('*The secret of being happy is accepting where you are in life and making the most out of everyday.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 89:
          msg.channel.send('*When you are willing to compromise and make sacrifices for someone, that’s where you feel true love.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 90:
          msg.channel.send('*Real love is not based on romance, a candle light dinner and a walk along the beach. It is based on care, compromise, respect and trust.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 91:
          msg.channel.send('*Compromise is not about losing. It’s about deciding that the other person has just as much right to be happy with the end result as you do.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 92:
          msg.channel.send('*Always learn to compromise, because it is better to bend slightly than to break the relationship forever.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 93:
          msg.channel.send('*Love is not a chore or a routine. It’s not something you schedule in your calendar. Love takes compromise from both people, but it should never compromise your happiness.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 94:
          msg.channel.send('*True love is the sweetest thing in life. That’s why we’re all either in love or looking for love. Sometimes you have to work for it- especially when life gets in the way- but I believe true, deep love is always worth fighting for.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 95:
          msg.channel.send('*It’s too much to ask one to love his enemy. Let’s compromise on forgetting him.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 96:
          msg.channel.send('*Destiny. Fate. Dreams. These unstoppable ideas are held deep in the heart of man. As long as there are people who seek freedom in this life, these things shall not vanish from the Earth.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 97:
          msg.channel.send('*Being alone is more painful than getting hurt.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 98:
          msg.channel.send('*Are there pirates because of treasure, or are there treasures because of pirates? It is the later. In the end, the greatest treasure is your team who dreamed with you and joined you in your journey to greatness.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 99:
          msg.channel.send('*Love will ask you to step out of your comfort zone. It’ll ask for you to sacrifice and compromise; if you can’t do that, you’re not ready.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 100:
          msg.channel.send('*Mr. Wrong will compromise your purity the disappear. Mr. Right will protect your purity and then change your last name.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 101:
          msg.channel.send('*Compromising doesn’t mean that you are wrong and someone is right. It only means hat you value your relationship more than your ego.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 102:
          msg.channel.send('*You deserve a love that is willing to risk everything for you.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 103:
          msg.channel.send('*No one falls in love by choice, it’s by chance. No one stays in love by chance, it’s by work. No one falls out of love by chance, it’s by choice.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 104:
          msg.channel.send('*Love is ever evolving and it takes compromise, work and patience.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 105:
          msg.channel.send('*It’s okay to wait for the love you deserve, do not compromise or settle because of loneliness.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 106:
          msg.channel.send('*Don’t love the person who enjoys being with you. Love the person who really suffers without you, because the pain of real love can never be defined.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 107:
          msg.channel.send('*Don\'t fear loneliness. Be on the right path, do your craft, and the right people will follow.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 108:
          msg.channel.send('*When you’re up in life, your friends know who you are. When you’re down in life, you get to know who your friends are.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 109:
          msg.channel.send('*Having a soulmate is not always about romance. You can find your soulmate in a friendship too.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 110:
          msg.channel.send('*We find ourselves through mirroring our interactions with others. We evolve together.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 111:
          msg.channel.send('*Don’t look for the person who is going to be perfect for you as you evolve. Look for  the person who is perfect for you now and evolve together.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 112:
          msg.channel.send('*Never compromise or change yourself just to get someone to like you.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 113:
          msg.channel.send('*Instead of wishing you were someone else, be proud of who you are. You never know who was looking at you wishing they were you.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 114:
          msg.channel.send('*Compromise is not an act of weakness. It demonstrates that you care for something or someone beyond yourself.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 115:
          msg.channel.send('*Take care of your body. It’s the only place you have to live in. Take care of your body and your body will take care of you.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 116:
          msg.channel.send('*It is health that is real wealth, and not pieces of gold and silver.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 117:
          msg.channel.send('*Discover what it means to take care of yourself. A man too busy to take are  of his health is like a mechanic too busy to take care of his tools.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 118:
          msg.channel.send('*The only source of knowledge is experience. Activity is the only road to knowledge. The realization of ignorance is the first act of knowing. However, if you wait to do everything until you’re sure it’s right, you’ll probably never do much of anything. You must be the change  you want to see in the world. The big question is whether you are going to be able to say a hearty yes to your adventure. The tragedy of life is not that it ends so soon, but that we wait so long to begin it.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 119:
          msg.channel.send('*Have a vision, trust yourself, break some rules, ignore the naysayers, don’t be afraid to fail.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 120:
          msg.channel.send('*Tackle problems no one had been able to do before. The only way to make the possible possible is to try the impossible.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 121:
          msg.channel.send('*Forget Plan B, test yourself and grow, operate without safety net. No defeatist attitude.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 122:
          msg.channel.send('*Everything is either rap or mileage. If you try getting to your goal step by step, you\'ll eventually get there.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 123:
          msg.channel.send('*Embrace change than oppress others.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 124:
          msg.channel.send('*Build the ultimate physical machine and the ultimate mind.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 125:
          msg.channel.send('*Live a risky life and a spicy life, everyday do something that scares you.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 126:
          msg.channel.send('*Always look for people best at their game.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 127:
          msg.channel.send('*Never bullshit.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 128:
          msg.channel.send('*A good defeat is a loss that nonetheless brings you a step closer to your ultimate goal.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 129:
          msg.channel.send('*Storms don’t last forever. Every trial endured and weathered in the right spirit makes a soul nobler and stronger than it was before.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 130:
          msg.channel.send('*It does not matter how slowly you go as long as you do not stop.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 131:
          msg.channel.send('*When somebody challenges you, fight back. Be brutal, be tough.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 132:
          msg.channel.send('*Always fight for the things you love.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 133:
          msg.channel.send('*You have to fight to reach your dream. You have to sacrifice and work hard for it.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 134:
          msg.channel.send('*I know you\'re busy with work. I know you\'re stressed. I miss you. Please take care of yourself. Don’t work too hard. Don\'t let your responsibilities crush you.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 135:
          msg.channel.send('*Don’t work too hard, for a family is waiting for you back at home.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 136:
          msg.channel.send('*There was no other way, right? To do that to yourself, you must be really hurting inside.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 137:
          msg.channel.send('*To fall in love with yourself is the first secret to happiness. Self-love is not selfish; you cannot truly love another until you know how to love yourself.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 138:
          msg.channel.send('*If you are always trying to be normal, you’ll never know how amazing you can be.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 139:
          msg.channel.send('*Learning to love yourself will be the hardest thing you’ll ever do in life. What if you simply devoted this year to loving yourself more? You alone are enough. You have nothing to prove to anyone.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 140:
          msg.channel.send('*Never love anyone who treats you like you’re ordinary.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 141:
          msg.channel.send('*Be gentle with yourself. You are a child of the universe, no less than the trees and the stars. In the noisy confusion of life keep peace in your soul.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 142:
          msg.channel.send('*Beauty begins the moment you decide to be yourself.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 143:
          msg.channel.send('*My beloved child, break your heart no longer. Each time you judge yourself you break your own heart.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 144:
          msg.channel.send('*A person’s mind is so powerful. It can invent, create, experience, and destroy things with thoughts alone.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 145:
          msg.channel.send('*Passion is the difference between having a job or having a career.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 146:
          msg.channel.send('*Today I will do what others won’t, so tomorrow I can do what others can’t.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 147:
          msg.channel.send('*If you want to be successful in this world, you have to follow your passion, not a paycheck.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 148:
          msg.channel.send('*Don’t be afraid of change. You may end up losing something good, but you will probably end up gaining something better.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 149:
          msg.channel.send('*Your life is your message to the world. Make sure it’s inspiring.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 150:
          msg.channel.send('*Never stop doing your best just because someone doesn’t give you credit.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
         case 151:
          msg.channel.send('*We must risk going too far to discover just how far we can go.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 152:
          msg.channel.send('*Take every risk. Drop every fear. If you don’t try, you’ll never know. In the end, what we regret are the chances we never took.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 153:
          msg.channel.send('*If you want it, go for it. Take a risk, don’t always play it safe or you’ll die wondering.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 154:
          msg.channel.send('*Life is all about taking risks. If you never take a risk, you will never achieve your dreams.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 155:
          msg.channel.send('*Take risks. If you win, you will be happy. If you lose, you will be wise.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 156:
          msg.channel.send('*Only those who dare to fail greatly can ever achieve greatly.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 157:
          msg.channel.send('*The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 158:
          msg.channel.send('*In any given moment we have two options: to step forward into growth or to step back into safety.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 159:
          msg.channel.send('*The real risk is doing nothing. Better an oops than a what if.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 160:
          msg.channel.send('*Be brave, take risks, and allow the unexpected.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 161:
          msg.channel.send('*When you want something you’ve never had, you have to do something you’ve never done. A ship is safe in its harbor, but that is not what a ship was built for.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 162:
          msg.channel.send('*Take chances when you are young so that you can tell stories when you are old.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 163:
          msg.channel.send('*Procrastination makes easy things hard, and hard things easier. It is like a credit card: it\'s a lot of fun until you get the bill.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 164:
          msg.channel.send('*Procrastination is a sign of a perfectionist. If we wait until we’re ready, we’ll be waiting for the rest of our lives.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 165:
          msg.channel.send('*Procrastination is the grave in which opportunity is buried. Start now, and make the most out of everyday.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 166:
          msg.channel.send('*Self-confidence is something you squeeze out of yourself, not something given to you by others. The kanji itself is written as this: “自(self)信(belief)” – Believe in yourself. You can’t believe in yourself if [the belief] is given to you by someone else, because what you can believe is the results of your own actions. You’ll be able to believe in yourself only after experiencing the outcome.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 167:
          msg.channel.send('*Nobody’s like you. Maybe you feel lonely, but at the same time, it proves to the world that you are unique and one of a kind.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 168:
          msg.channel.send('*Confidence is like a muscle: the more you use it, the stronger it gets.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 169:
          msg.channel.send('*The way to develop self-confidence is to do the thing you fear and get the record of successful experiences behind you.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 170:
          msg.channel.send('*A woman is turned on by how much a man desires her.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
         case 171:
          msg.channel.send('*The backbone of success is hard work, determination, good planning and perserverence.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 172:
          msg.channel.send('*A dream written down with a date becomes a goal. A goal broken down into steps becomes a plan. A plan backed by action makes your dreams come true.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 173:
          msg.channel.send('*Planning is bringing the future into the present so that you can do something about it now.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 174:
          msg.channel.send('*Kami sama is always on time. Trust her.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 175:
          msg.channel.send('*Trials lead to great faith. Great faith leads to testimony. Don\'t ever lose faith.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 176:
          msg.channel.send('*We are mirrors to each other. We find ourselves by interacting with other people. Don\'t be afraid to show your true self.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 177:
          msg.channel.send('*Love is having someone who is your best friend, your lover and soul mate all in one.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 178:
          msg.channel.send('*You either give in, give up, or give it your all.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 179:
          msg.channel.send('*Far better it is to dare mighty things, to win glorious triumphs even though checkered by failure, than to rank with those poor spirits who neither enjoy nor suffer much because they live in the gray twilight that knows neither victory nor defeat.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 180:
          msg.channel.send('*Do not rush, for Kami sama’s secret is patience. Everything that is meant to be, will come at the designated time.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 181:
          msg.channel.send('*Repentance is a change of mind and heart. It includes turning away from sin and turning to Kami sama for forgiveness.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 182:
          msg.channel.send('*Karma has no menu. You get served what you deserve. What goes around comes around. Keep your circle positive. Say good words. Think good thoughts. Do good deeds.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 183:
          msg.channel.send('*You are free to make any decision you wish. But you are not free from the consequences of that decision.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 184:
          msg.channel.send('*Forgive the person and their actions, never give in to hate, let it go, set it free, and karma will take care of what is meant to be.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 185:
          msg.channel.send('*Don’t waste your time on revenge. Those that hurt you will eventually face their karma.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 186:
          msg.channel.send('*If you cheat on someone that is willing to do anything for you, you actually cheated yourself out of true loyalty.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 187:
          msg.channel.send('*I am a good enough person to forgive you. But not stupid enough to trust you again.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 188:
          msg.channel.send('*A cheater’s punishment is to live a life of mistrust because they live in constant fear that the person they cheated with will also cheat on them. Some call it poetic justice. But Kami sama calls it karma.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 189:
          msg.channel.send('*Cheating means you don’t give a fuck about your relationship. There’s no excuse.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 190:
          msg.channel.send('*Trust is like a paper, once it’s crumbled it can’t be perfect again.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 191:
          msg.channel.send('*Behind every untrusting girl is a boy who made her that way.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 192:
          msg.channel.send('*Real men stay faithful. They don’t have time to look for another woman because they’re too busy looking for new ways to love their own.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 193:
          msg.channel.send('*Be careful for what you wish for. There’s always a catch, and you may receive it.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 194:
          msg.channel.send('*There\'s no path to happiness; happiness is the path.*');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 195:
          msg.channel.send('**');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 196:
          msg.channel.send('**');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 197:
          msg.channel.send('**');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 198:
          msg.channel.send('**');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 199:
          msg.channel.send('**');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        case 200:
          msg.channel.send('**');
          msg.channel.send('Are you pleased '+ msg.author + ' sama?\nIf not, press m!shake again. If yes, press m!yes');
          break;
        default:
          msg.channel.send('Default');
      }
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
    msg.channel.send('Q&A:\n`m!help-01`) Who is the Kami sama of this shrine? \n`m!help-02`) Why do we need to make a wish?\n`m!help`-03) What are the services? \n`m!help-04`) Where did the creator get her inspiration? \n`m!help-05`) What\'s the difference between a miko and a onmyoji?\n`m!help-06`) Who\'s the author of this bot?');
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

client.login(config.token);

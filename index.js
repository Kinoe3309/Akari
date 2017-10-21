const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzY2NjEyMzgyMjc5MTM5MzM5.DLvZ_Q.Insj2L7IdBP6euJii10jpvri7kM'
let gif = '';
let pic = '';
let video = '';
let prefix = 'a!';
let min = 1;
let max = 1;

client.on("ready", () => {
  console.log(`woke, ${client.users.size} users, ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setGame(`Akari is playing on ${client.guilds.size} servers!`);
});

client.on('message', msg => {
if(msg.author.bot)
  return;
else if (msg.content.startsWith(prefix)) {
  var user = msg.author.username;
  var command = msg.content;
  if (command.includes('ping')) {
    var time = new Date().getTime() - msg.createdTimestamp;
    msg.reply('Pong! Took ' + time + ' ms!');
    console.log ('Pinged user ' + user + '(took ' + time + ' ms)')
    return;
  } else if (command.includes('pong')) {
    msg.channel.send('no go away');
    return;
  } else if (command.includes('hug')) {
    var recipent = command.slice(6, command.length);
    gif = hug();
    if (recipent.length > 2)
      msg.channel.send('*' + user + ' hugs ' + recipent + '* ' + gif);
    else {
      msg.channel.send('*hugs ' + user + '* ' + gif);
    }
    return;
  } else if (command.includes('pat')) {
    var recipent = command.slice(6, command.length);
    gif = pat();
    if (recipent.length > 2)
      msg.channel.send('*' + user + ' pats ' + recipent + '* ' + gif);
    else {
      msg.channel.send('*pats ' + user + '* ' + gif);
    }
    return;
  } else if (command.includes('nature')) {
    video = nature();
    msg.channel.send(video);
    return;
  } else if (command.includes('dance')) {
    gif = dance();
    msg.channel.send(user + ' is dancing~ ' + gif);
    return;
  } else if (command.includes('love')) {
    gif = love();
    msg.channel.send(gif);
    return;
  } else if (command.includes('smug')) {
    pic = smug();
    msg.channel.send(pic);
    return;
  } else if (command.includes('shrug')) {
    pic = shrug();
    msg.channel.send(pic);
    return;
  } else if (command.includes('cop')) {
    video = cop();
    msg.channel.send(video);
    return;
  } else if (command.includes('begone')) {
    pic = begone();
    msg.channel.send(pic);
    return;
  } else if (command.includes('spasm')) {
    gif = spasm();
    msg.channel.send(gif);
    return;
  } else if (command.includes('gay')) {
    gif = gay();
    msg.channel.send(gif);
    return;
  } else if (command.includes('avatar')) {
    var show = command.slice(9, command.length);
    if (show.length > 1) {
      pic = msg.mentions.users.array();
      msg.channel.send(pic[0].avatarURL);
    } else {
      pic = msg.author.avatarURL;
      msg.channel.send(pic);
    }
  } else if (command.includes('help')) {
    msg.channel.send('The current commands are: pat, hug, love, dance, smug, shrug, support and invite. The prefix is ' + prefix);
    return;
  } else if (command.includes('support')) {
    msg.channel.send('Use this invite link to join the support server! https://discord.gg/BMS673x');
    return;
  } else if (command.includes('invite')) {
    msg.channel.send('Use this link to add the bot to your own server! https://discordapp.com/oauth2/authorize?&client_id=366612382279139339&scope=bot&permissions=0');
    return;
  } else if (command.includes('info')) {
    msg.channel.send("Current bot developer(s): Kinoe#3309. Extra thanks to Washingdone, Fewshin, thy and jtm94.");
    return;
  }
} else if (msg.content === 'pretty good') {
  msg.channel.send('https://giphy.com/gifs/youtuber-wAFJhmlBN61eo');
  return;
}
});

function hug(){
  var hugArray = [
  'https://media.giphy.com/media/a5s3dI6Wv1Qcw/giphy.gif',
  'https://media.giphy.com/media/n4iweVTNXZPOM/giphy.gif',
  'http://24.media.tumblr.com/tumblr_md2xd0iMWD1rsat7do1_500.gif',
  'https://68.media.tumblr.com/5541ac10ee55974f882d9d437a3cc2d1/tumblr_nz0jt3jM421sbzv20o1_500.gif',
  'http://68.media.tumblr.com/5cc1f8e858869bfac8ea8c07f5e58f4f/tumblr_inline_nwy3b2PnBS1txlwvy_500.gif',
  'https://i.pinimg.com/originals/68/0b/69/680b69563aceba3df48b4483d007bce3.gif'
  ]
  gif = hugArray[Math.floor(Math.random() * hugArray.length)];
  return gif;
}

function pat(){
  var patArray = [
  'http://i0.kym-cdn.com/photos/images/newsfeed/001/093/098/155.gif',
  'https://68.media.tumblr.com/3cc69630f81a1af371e9b1060282aee2/tumblr_nzxsdtG8Re1sbzv20o1_500.gif',
  'https://i.warosu.org/data/jp/img/0101/38/1354140074087.gif',
  ]
  gif = patArray[Math.floor(Math.random() * patArray.length)];
  return gif;
}

function nature(){
  var natureArray = [
  'https://www.youtube.com/watch?v=8yXnJZ9wo2I',
  'https://www.youtube.com/watch?v=ZXsoTnSRePA',
  'https://www.youtube.com/watch?v=La3su_Iykms',
  'https://www.youtube.com/watch?v=1JIzxhs2c5s'
  ]
  video = natureArray[Math.floor(Math.random() * natureArray.length)];
  return video;
}

function dance(){
  var danceArray = [
  'https://i.pinimg.com/originals/5a/c0/19/5ac019ad7ac517ed06668e24c0212341.gif',
  'https://media.giphy.com/media/LxDqvMntebY1G/giphy.gif',
  'https://media.giphy.com/media/jkEK7WCevbF04/giphy.gif',
  'https://68.media.tumblr.com/f3ea0e136d11573243d8f383ee1c68d3/tumblr_o8ovaznR8p1rnr9w3o1_500.gif',
  'https://media.giphy.com/media/7RlheR3HjyQOk/giphy.gif',
  'https://i.pinimg.com/originals/6d/20/2f/6d202f701a778e06626e81d01a900f8d.gif'
  ]
  gif = danceArray[Math.floor(Math.random() * danceArray.length)];
  return gif;
}

function love(){
  var loveArray = [
  'http://pa1.narvii.com/5739/24a1a156615836d968359cf37275d6a78b8d8d79_hq.gif',
  'https://media.giphy.com/media/G7vN34HuAtkT6/giphy.gif',
  'https://media.giphy.com/media/HN0vI0nbR9jX2/giphy.gif',
  'http://i0.kym-cdn.com/photos/images/newsfeed/001/093/876/a80.gif',
  'http://i0.kym-cdn.com/photos/images/newsfeed/000/701/564/da3.gif'
  ]
  gif = loveArray[Math.floor(Math.random() * loveArray.length)];
  return gif;
}

function begone(){
  var begoneArray = [
  'https://imgur.com/7GOx0p1'
  ]
  pic = begoneArray[Math.floor(Math.random() * begoneArray.length)];
  return pic;
}

function spasm(){
  var spasmArray = [
  'https://gfycat.com/PolishedImpassionedBluefish?speed=8'
  ]
  gif = spasmArray[Math.floor(Math.random() * spasmArray.length)];
  return gif;
}

function gay(){
  var gayArray = [
  'https://i.imgur.com/o4OW3ij.mp4',
  'http://ih1.redbubble.net/image.222354078.3443/flat,1000x1000,075,f.u2.jpg',
  'https://pics.me.me/6-powerful-coming-out-stories-guaranteed-to-make-you-cry-4126063.png',
  'https://funnypictures3.fjcdn.com/thumbnails/comments/Blank+_282cfd3d67ad147d2ec3a5b22b817192.jpg',
  'https://i.imgur.com/bT7xCZX.jpg',
  'http://i0.kym-cdn.com/photos/images/original/001/173/918/a96.jpg',
  'https://www.youtube.com/watch?v=2gO0Yg5S7uc',
  'https://www.youtube.com/watch?v=WPviAKaHAN0',
  'https://www.youtube.com/watch?v=LhUnW5aRpS8',
  'https://www.youtube.com/watch?v=5FbQ-oFhjyQ'
  ]
  gif = gayArray[Math.floor(Math.random() * gayArray.length)];
  return gif;
}

function smug(){
  var smugArray = [
  'https://akari.is-a-good-waifu.com/82053c.png',
  'https://akari.is-a-good-waifu.com/1869a9.jpg',
  'http://i0.kym-cdn.com/photos/images/newsfeed/000/964/082/8c7.gif',
  'http://s3.amazonaws.com/cdn.roosterteeth.com/uploads/images/d1098b0b-8f04-4334-bfc0-4292f8521912/md/2053254-1442344143038-jeje.jpg'
  ]
  pic = smugArray[Math.floor(Math.random() * smugArray.length)];
  return pic;
}

function shrug(){
  var shrugArray = [
  'http://suptg.thisisnotatrueending.com/archive/34161166/images/1408145216532.png',
  'https://img.4plebs.org/boards/s4s/image/1401/87/1401870718588.jpg',
  'https://img.4plebs.org/boards/pol/image/1410/91/1410917315970.png'
  ]
  pic = shrugArray[Math.floor(Math.random() * shrugArray.length)];
  return pic;
}

function cop(){
  var copArray = [
  'https://www.youtube.com/watch?v=-o3TfHjj_e4',
  'https://www.youtube.com/watch?v=m4XahX7cuU8',
  'https://www.youtube.com/watch?v=fG3J4GiMj74',
  'https://www.youtube.com/watch?v=uL5bcwKRqAM',
  'https://www.youtube.com/watch?v=PI8302JmM-8',
  'https://www.youtube.com/watch?v=uL5bcwKRqAM',
  'https://www.youtube.com/watch?v=QrhWjEoRuBA',
  'https://www.youtube.com/watch?v=bukzXzsG77o',
  'https://www.youtube.com/watch?v=N8vaJaFCFYA',
  'https://www.youtube.com/watch?v=kBQ0K8KxtAA',
  'https://www.youtube.com/watch?v=w_DfrR3NRA8'
  ]
  video = copArray[Math.floor(Math.random() * copArray.length)];
  return video;
}

client.login(token);

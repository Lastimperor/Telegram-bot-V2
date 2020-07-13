const Etherscan = require('etherscan');
const Telegraf = require('telegraf');
const bot = new Telegraf("887177867:AAFrboSV8D8tHjGJTf8e5aQnlBzs3DvV0NI");
const axios = require('axios');


1- Get Ether Balance for a single Address
https://api.etherscan.io/api?module=account&action=balance&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&tag=latest&apikey=YourApiKeyToken

2 - Get a list of 'Internal' Transactions by Address
[Optional Parameters] startblock: starting blockNo to retrieve results, endblock: ending blockNo to retrieve results

http://api.etherscan.io/api?module=account&action=txlistinternal&address=0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3&startblock=0&endblock=2702578&sort=asc&apikey=YourApiKeyToken

3 - Get a list of 'Normal' Transactions By Address
[Optional Parameters] startblock: starting blockNo to retrieve results, endblock: ending blockNo to retrieve results

http://api.etherscan.io/api?module=account&action=txlist&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken

4 - Get "Internal Transactions" by Transaction Hash
https://api.etherscan.io/api?module=account&action=txlistinternal&txhash=0x40eb908387324f2b575b4879cd9d7188f69c8fc9d87c901b9e2daaea4b442170&apikey=YourApiKeyToken

5 - Get a list of "ERC20 - Token Transfer Events" by Address
[Optional Parameters] startblock: starting blockNo to retrieve results, endblock: ending blockNo to retrieve results

http://api.etherscan.io/api?module=account&action=tokentx&address=0x4e83362442b8d1bec281594cea3050c8eb01311c&startblock=0&endblock=999999999&sort=asc&apikey=YourApiKeyToken
(Returns up to a maximum of the last 10000 transactions only)

or

https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&page=1&offset=100&sort=asc&apikey=YourApiKeyToken
(To get paginated results use page=<page number> and offset=<max records to return>)

or

https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=0x4e83362442b8d1bec281594cea3050c8eb01311c&page=1&offset=100&sort=asc&apikey=YourApiKeyToken
(To get transfer events for a specific token contract, include the contractaddress parameter)


6 - Get a list of "ERC721 - Token Transfer Events" by Address
[Optional Parameters] startblock: starting blockNo to retrieve results, endblock: ending blockNo to retrieve results

http://api.etherscan.io/api?module=account&action=tokennfttx&address=0x6975be450864c02b4613023c2152ee0743572325&startblock=0&endblock=999999999&sort=asc&apikey=YourApiKeyToken
(Returns up to a maximum of the last 10000 transactions only)

or

https://api.etherscan.io/api?module=account&action=tokennfttx&contractaddress=0x06012c8cf97bead5deae237070f9587f8e7a266d&page=1&offset=100&sort=asc&apikey=YourApiKeyToken
(To get paginated results use page=<page number> and offset=<max records to return>)

or

https://api.etherscan.io/api?module=account&action=tokennfttx&contractaddress=0x06012c8cf97bead5deae237070f9587f8e7a266d&address=0x6975be450864c02b4613023c2152ee0743572325&page=1&offset=100&sort=asc&apikey=YourApiKeyToken
(To get transfer events for a specific token contract, include the contractaddress parameter)

7 - Check Transaction Receipt Status (Only applicable for Post Byzantium fork transactions)
Note: status: 0 = Fail, 1 = Pass. Will return null/empty value for pre-byzantium fork

https://api.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=0x513c1ba0bebf66436b5fed86ab668452b7805593c05073eb2d51d3a52f480a76&apikey=YourApiKeyToken

8 - Get Estimation of Confirmation Time
https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=YourApiKeyToken

9 - Get ETHER Last Price
https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken


var getJSON = require('get-json')


function calcoloSurplus(ctx, val , calcoloDividendo) {
  getJSON('https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c&address=0x91f273b7A28F5169FD7B7995A54B767cA797BC63&tag=latest&apikey=BVYKSWHMF296JTM7PJPC3EGBGMJ24MAUVQ', function (error, response){
    

bot.start((ctx) => ctx.reply('Hello my friend, welcome to Crypto Wallet Bot!!\
 \n\
 \n\
 \nLast news here:\
 \nhttps://blog.edgelessgroup.io\
 \n -------------------------------------------------------------------\
 \n Here are a list of commands you can write!\
 \n -------------------------------------------------------------------\
 \n /surplus - amount of surplus in the current staking round\
 \n /staked - amount of edgeless staked in the current staking round\
 \n /staking - staking platform where you can stake Edg\
 \n /twitter, facebook or reddit - official social account\
 \n /youtube - official youtube channel\
 \n /blog - Edgeless blog\
 \n /token - Information about the token\
 '))

bot.command('surplus', (ctx) => calcoloSurplus(ctx));
bot.command('staked', (ctx) => ctx.reply(`The number of edg staked in this round is: ${amountStaked} edg`));
bot.command('dividend', (ctx) => ctx.reply('How many edg did you put in the staking platform?\
\n[from 1000 to 50000 edg]'));
bot.command('stakers', (ctx) => ctx.reply('267 users are staking in the current round'))
bot.command('staking', (ctx) => ctx.reply('Take a look here: https://staking.edgelessgroup.io/')); //ref/5c06783b96d639407761338a
bot.command('twitter', (ctx) => ctx.reply('Take a look here: https://twitter.com/edgelessproject'));
bot.command('facebook', (ctx) => ctx.reply('Take a look here: https://www.facebook.com/EdgelessCasino'));
bot.command('reddit', (ctx) => ctx.reply('Take a look here: https://www.reddit.com/r/Edgeless'));
bot.command('youtube', (ctx) => ctx.reply('Take a look here: https://www.youtube.com/channel/UC_7GBNR9N2UATqmdEeGjBvA'))
bot.command('blog', (ctx) => ctx.reply('Take a look here: https://blog.edgelessgroup.io'));
bot.command('token', (ctx) => ctx.reply('Take a look here: https://www.edgelessgroup.io/token'));
bot.command('casino', (ctx) => ctx.reply('Enjoy: https://edgeless.io/')); //?ref=59cd635dfef2f72b003e2ea8
bot.help((ctx) => ctx.reply('For any problem contact the creator @Lastimperor'))

bot.on('sticker', (ctx) => ctx.reply('ehy, do not spam me'))
bot.on('Photo', (ctx) => ctx.reply('oh, nice picture'))
bot.hears('hi', (ctx) => ctx.reply('Hey there\
 \nhow are you?'))
bot.hears('surplus', (ctx) => calcoloSurplus(ctx));
bot.hears('staked', (ctx) => ctx.reply(`The number of edg staked is: ${amountStaked} edg`))
bot.hears('twitter', (ctx) => ctx.reply('Take a look here: https://twitter.com/edgelessproject'))
bot.hears('facebook', (ctx) => ctx.reply('Take a look here: https://www.facebook.com/EdgelessCasino'))
bot.hears('reddit', (ctx) => ctx.reply('Take a look here: https://www.reddit.com/r/Edgeless'))
bot.hears('youtube', (ctx) => ctx.reply('Take a look here: https://www.youtube.com/channel/UC_7GBNR9N2UATqmdEeGjBvA'))
bot.hears('blog', (ctx) => ctx.reply('Take a look here: https://blog.edgelessgroup.io'))
bot.hears('token', (ctx) => ctx.reply('Take a look here: https://www.edgelessgroup.io/token'))

bot.launch()

bot.on('text', (ctx)=> {
  const subreddit = ctx.message.text;

  var parsed = parseInt(subreddit);
  if (!isNaN(parsed)) { calcoloSurplus(ctx, parsed, true)}
  else {
  axios
    .get(`https://reddit.com/r/${subreddit}/top.json?limit=10`)
    .then(res => {
      const data = res.data.data;
      if (data.children.length < 1)
        return ctx.reply("try to another search (in english), for any problem contact the creator @Lastimperor");
      const link = `https://reddit.com/${data.children[0].data.permalink}`;
      return ctx.reply(link);
    })
    .catch(err => {
      console.log(err);
      return ctx.reply('try another search (in english), for any problem contact the creator @Lastimperor');
    });
  }
});

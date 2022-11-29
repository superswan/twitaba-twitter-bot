const banner =`\n

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣷⣦⣄⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣴⣶⣾⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⢿⣷⣦⡀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣴⣿⠟⠛⠋⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣆⠀⠀
⠀⠀⠀⢀⣴⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣄⡀⠹⠆⠀
⠀⠀⣰⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⢋⣵⠆⣶⣶⣶⣬⠀⠀⠀
⠀⠰⠏⠀⠀⠀⢀⣤⠴⠶⢚⠛⠛⠛⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⡇⠀⢹⣿⣿⡏⣧⠀⠀
⠀⠀⠀⠀⠀⢚⡉⠖⠛⢿⣿⣿⣿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣷⣴⣾⣿⣿⢣⡏⠇⠀
⠀⠀⠀⢀⣴⡿⣷⣤⣀⣼⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⡁⢹⣿⣿⣿⣿⡿⢠⠁⠀⠀
⠀⠀⢠⡿⢋⡅⢻⣿⣿⣿⣿⣿⣿⣿⡟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡇⠈⢿⣿⣿⣿⠇⡺⠀⠀⠀
⠀⠀⣸⠁⠸⣇⠀⢿⣿⣿⣿⣿⣿⣿⠃⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡀⠈⠛⠛⠁⣰⠃⠀⠀⠀
⠀⠀⠀⠀⠀⢻⣄⠀⠙⢿⣿⡿⠟⠁⢀⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⢦⣤⣤⣁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⢶⣄⠀⠀⠀⠀⢤⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣬⣽⣶⠶⠟⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀
  __| __|__ __|_ )  _ \__ __| 
 (_ | _|    |  _ \ (   |  |   
\___|___|  _| ___/\___/  _|     
`;
console.log(banner)

// includes and config
//const fs = require('fs');
const config = require('./config.js');
const { ETwitterStreamEvent, TwitterApi } = require('twitter-api-v2');

// Bot parameters
const twitterUser = '@80386cpu';                                                // bot username
fortunes = ["Bad Luck","Average Luck","Good Luck","Excellent Luck","Reply hazy, try again","Godly Luck","Very Bad Luck","Outlook good","Better not tell you now","You will meet a dark handsome stranger","ｷﾀ━━━━━━(ﾟ∀ﾟ)━━━━━━ !!!!","( ´,_ゝ`)","Good news will come to you by mail"]

// Twitter API
const userClient = new TwitterApi({                                             // set in config.js
    appKey: config.consumer_key,
    appSecret: config.consumer_secret,
    accessToken: config.access_token,
    accessSecret: config.access_token_secret,
});

const client = new TwitterApi(config.bearer_token);                             // read-only? uses bearer token

// 0Auth 1.0 Authentication (User Context)
// https://github.com/twitterdev/Twitter-API-v2-sample-code/blob/main/Manage-Tweets/create_tweet.js
const axios = require('axios');
const crypto = require('crypto');
const OAuth = require('oauth-1.0a');
const qs = require('querystring');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const consumer_key = config.consumer_key;
const consumer_secret =  config.consumer_secret;

const endpointURL = `https://api.twitter.com/2/tweets`;

// Authenticate in browse with PIN 
const requestTokenURL = 'https://api.twitter.com/oauth/request_token?oauth_callback=oob&x_auth_access_type=write';
const authorizeURL = new URL('https://api.twitter.com/oauth/authorize');
const accessTokenURL = 'https://api.twitter.com/oauth/access_token';
const oauth = OAuth({
  consumer: {
    key: consumer_key,
    secret: consumer_secret
  },
  signature_method: 'HMAC-SHA1',
  hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
});

async function input(prompt) {
  return new Promise(async (resolve, reject) => {
    readline.question(prompt, (out) => {
      readline.close();
      resolve(out);
    });
  });
}

async function requestToken() {
  const authHeader = oauth.toHeader(oauth.authorize({
    url: requestTokenURL,
    method: 'POST'
  }));

  const req = await axios.post(requestTokenURL, {}, {
    headers: {
      Authorization : authHeader["Authorization"]
    },
  });
  if (req) {

    return qs.parse(req.data);

  } else {
    throw new Error('Cannot get an OAuth request token');
  }
}


async function accessToken({
  oauth_token,
  oauth_token_secret
}, verifier) {
  const authHeader = oauth.toHeader(oauth.authorize({
    url: accessTokenURL,
    method: 'POST'
  }));
  const path = `https://api.twitter.com/oauth/access_token?oauth_verifier=${verifier}&oauth_token=${oauth_token}`
  const req = await axios.post(path, {},{
    headers: {
      Authorization : authHeader["Authorization"]
    }
  });
  if (req.data) {
    return qs.parse(req.data);
  } else {
    throw new Error('Cannot get an OAuth request token');
  }
}

async function getRequest({
    oauth_token,
    oauth_token_secret
  }, data) {
  
    const token = {
      key: oauth_token,
      secret: oauth_token_secret
    };
  
    const authHeader = oauth.toHeader(oauth.authorize({
      url: endpointURL,
      method: 'POST'
    }, token));
  
    const req = await axios.post(endpointURL, data, {
  
      responseType: 'json',
      headers: {
        Authorization : authHeader["Authorization"],
        'user-agent': "v2CreateTweetJS",
        'content-type': "application/json",
        'accept': "application/json"
      }
    });
    if (req.data) {
      return req.data;
    } else {
      //throw new Error('Unsuccessful request');
      console.log("oops")
    }
  }

async function getAuth() {
  try {
    // Get request token
    const oAuthRequestToken = await requestToken();
    // Get authorization
    authorizeURL.searchParams.append('oauth_token', oAuthRequestToken.oauth_token);
    console.log('Please go here and authorize:', authorizeURL.href);
    const pin = await input('Paste the PIN here: ');
    // Get the access token
    const oAuthAccessToken = await accessToken(oAuthRequestToken, pin.trim());
    console.log("Authenticated Successfully")
    return oAuthAccessToken;
  
} catch (e) {
    console.log(e);
    process.exit(-1);
  }
}


// Bot functions
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function checkWin(postId) {
    var postId = postId.toString()
    var search_pattern = new RegExp(/(\d)\1+$/);

    if (search_pattern.test(postId)) {
        var winGet;
        console.log("Winrar! " + postId)
        if (search_pattern.test(postId.slice(0,-1))) {                          // trips
            if (search_pattern.test(postId.slice(0,-2))) {
                winGet = 'quads!'                                               // quads
                console.log("☆ quads!")
                
                return winGet;
            } else {
                winGet = 'trips!'
                console.log("☆ trips!")
            
                return winGet;
            }
        } else {
            winGet = "dubs! check 'em"                                          // dubs
            console.log("☆ dubs! check 'em")
            
            return winGet;
        }
    } else {
        return false;
    }
}

async function sendTweet(roll, username, tweetId, fortune,oAuthAccessToken) {
    var hasFortune = false;
    if (typeof fortune === 'undefined') {
        hasFortune = false;
    } else {
        hasFortune = true;
    }
    var fortuneText = `Your fortune: ${fortune}\n`
    var winGet = checkWin(roll)
    var replyMsg = ''
    if (winGet) {
        replyMsg = `@${username} ${roll}\n${winGet}`;
    } else {
        replyMsg = `@${username} ${roll}`;
    }

    if (hasFortune) {
        replyMsg = fortuneText + replyMsg;
    }
    //await authClient.v2.reply(replyMsg, tweetId)
    const data = {
        "text": replyMsg,
        "reply" : {"in_reply_to_tweet_id": tweetId}
    }
    const response = await getRequest(oAuthAccessToken, data);
}

// main loop
async function listener() {
    const oAuthAccessToken = await getAuth();

    const rules = await client.v2.streamRules();
    if (rules.data?.length) {
        console.log("Clearing previous Stream Rules")
        await client.v2.updateStreamRules({
            delete: { ids: rules.data.map(rule => rule.id) },
        });
    }

    await client.v2.updateStreamRules({
        add: [{ value: twitterUser }],
    });

    const stream = await client.v2.searchStream({
    'tweet.fields': ['conversation_id'],
    'user.fields' : ['username'],
    expansions: ['referenced_tweets.id', 'author_id'],
    });
    // Enable auto reconnect
    stream.autoReconnect = true;
    var roulette_lobby = []

    console.log("Listener Stream Started...")
    stream.on(ETwitterStreamEvent.Data, async tweet => {
        //console.log(JSON.stringify(tweet,null,2))                             // debug
        var conversation_id = tweet.data.conversation_id;
        var tweet_id = tweet.data.id;
        var text = tweet.data.text;
        var name = tweet.includes.users[0].username;
        var userId = tweet.includes.users[0].id;
        var fortune;

        // give fortune on #fortune 
        if (text.includes("#fortune")) {
            var fortuneNum = randInt(0,fortunes.length)
            fortune = fortunes[fortuneNum]
            var hasFortune = true;         
        } else {
            var hasFortune = false;
        }

        if (text.includes("!roll") || text.includes("/roll")) {

            var lobbyId = conversation_id.toString()
            var lobbyExists = roulette_lobby.find(lobby => lobby.id === conversation_id ? true : false)

            if (!lobbyExists) {
                let userLobby = 
                {
                "id": lobbyId, 
                "data": { 
                    "fullGame": false,
                    "participants": []
                    } 
                }
                roulette_lobby.push(userLobby)
                console.log(`[☆ NEW LOBBY ☆ ${lobbyId}]`)
            } 
            
            var lobby = roulette_lobby.filter(lobby => lobby.id === lobbyId)[0]
            var lobbyParticipants = lobby.data.participants
            var rollId = randInt(1000000,9999999);
            
            if (lobbyExists) {
                var userExistsInLobby = lobbyParticipants.find(user => user.id === userId ? true : false)
                if (userExistsInLobby) {
                    userRoll = lobbyParticipants.filter(user => user.id === userId)[0];
                    hasReroll = userRoll.rollData.hasReroll;
                    if (hasReroll) {
                        userRoll.rollData.hasReroll = false;
                        userRoll.rollData.reroll = rollId;
                    } else {
                        rollId = userRoll.rollData.reroll;
                        console.log(`User @${name} attempted to roll more than twice!`)

                        return false;
                    }
                } else {
                    var userRoll = { 
                        "id": userId, "rollData": 
                        {
                            "username": name,
                            "roll": rollId,
                            "reroll": null,
                            "hasReroll": true,
                        }
                    }
                    lobbyParticipants.push(userRoll)
                }
            } else {
                var userRoll = { 
                    "id": userId, "rollData": 
                    {
                        "username": name,
                        "roll": rollId,
                        "reroll": null,
                        "hasReroll": true,
                    }
                }
                lobbyParticipants.push(userRoll)
            }

            sendTweet(rollId,name,tweet_id,fortune,oAuthAccessToken)
            console.log(`[${lobbyId}] User @${name} rolled ${rollId}: ${text}`)

        } else if (hasFortune) {

        }
    });
}

listener();

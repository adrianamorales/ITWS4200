/*Lab 5 – node.js (or Ruby on Rails) and twitter API
In this lab we are going to create a node server to read from the twitter stream and create a file like we used in lab 1; tweets.json
Your program should read 1000 tweets and put them in a file named according to convention: “convention-tweets.json”
For node.js – 
You are to use the express framework to setup your server and you will need the fs module (http://nodejs.org/api/fs.html) in order to write to your file.

Information about express can be found here: http://expressjs.com/
Information about twitter’s streaming API can be found here;
https://dev.twitter.com/docs/streaming-apis

But you might want to check this out instead:

Checkout the ntwitter API as an option here; https://github.com/AvianFlu/ntwitter

It is not required in this lab to create a web page – however we should be able to use your file as an input file for lab 1.
*/


// _______________________________________________________________________________________________________
// Setting up the NTwitter API
var twitter = require('ntwitter');

var twit = new twitter({
  consumer_key: 'kWic9nUYJhXC6OcuwGWKg',//api kiey
  consumer_secret: 'nvGcJQFqvONo1XQYZuJl75obCC7H6iTiVFaPVuCNaKM', // api secret
  access_token_key: '113678290-iYr3btmRSEUgX8velVOVIyncew6WuOhqvh8J5IZe', //keys
  access_token_secret: 'l9bmsKFI1gIXzuE7QrS22djTsqhMLTG3DFbZLXnkLmAzi' //twitter token
});


// Using the express framework to setup server 
// _______________________________________________________________________________________________________

// creating an express application and server
var express = require("express");
var twitterApp = express();

// Set up node server using the express framework
twitterApp.get('/', function(req, res){ // req = request, res = response
    res.send('Server has been created');
});

twitterApp.listen(3000);
console.log('Listening on port 3000');

// Save twtter data to a JSON file
// _______________________________________________________________________________________________________

// haven't finished implementation
var fs = require('fs'); // using fs module


var outputFilename = 'ITWS4200-lab5-morala4-tweets.json'; // path to filename

// read from ntwitter stream to get 1000 tweets
// _______________________________________________________________________________________________________

var counter =0;
twit
  .verifyCredentials(function (err, data) {
    console.log(data);
  })
  .updateStatus('Test tweet from ntwitter/' + twitter.VERSION,
    function (err, data) {
      console.log(data);
    }
  );

 // get tweets from san francisco
twit.stream('statuses/filter', {'locations':'-122.75, 36.8, -121.75, 37.8'},  function(stream) {
  stream.on('data', function (data) {
    console.log(data);
      
    fs.appendFile(outputFilename, JSON.stringify(data, null, 4), function (err) {
      if (err) throw err; 
        else counter++;
    console.log('The "data to append" was appended to file!');

        if (counter === 999)
        {
            stream.destroy;
            setTimeout(stream.destroy, 1000);
        }
    });
      
  });
 


});








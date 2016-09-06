// Grabbing packages and variable needed

var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

//configuring app 
//tell node where to look for resources

app.use(express.static(__dirname + '/public'));


//set the view engine to ejs (common node templating engine)

app.set('view engine', 'ejs');


ig.use({
  access_token:'298810876.1677ed0.f6ee9ae7952d4663b5284483c49a0ccc',
});
// alternatively we can use the client_id and client_secret
// for now we'll use the access_token way
// ig.use({
// get these from when we create our app as an instagram developer
// https://www.instagram.com/developer/
// client_id: 'MY_CLIENT_ID',
// client_secret: 'MY_CLIENT_SECRET'
// });

// set the ROUTES
//home page route - our profile's images

app.get('/', function(req, res) {
// use the instagram package to get popular media
ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
// render the home page and pass in the popular images
res.render('pages/index', { grams: medias });
});
});

// Start the surfer

app.listen(3000);
console.log("app started check out http://localhost:3000");
/* 
* main.js - entry file
* author: Ved Maurya
*/
const express = require('express');
const app = express();
var config = require('./config/config')[process.NODE_ENV];

/**
 * photos from flickr public 
 * method: GET
 * params: tags - optional
 * ex: http://localhost:8080/flickr/photos?tags=canada,usa
 */
app.get('/flickr/photos', require('./lib/getPhotos'))

/**
 * node server start here
 */
app.listen(config.port, function(re, res) {
    console.log('app running at port ' + config.port);
})

/* 
* getPhotos.js - API to get flickrpublic photos
* method: GET
* @params: tags - comma seperated value (optional)
* author: Ved Maurya
*/
var request = require('request');
var config = require('./../config/config')[process.NODE_ENV];
const xml2js = require('xml2js');

module.exports = function getPhotos(req, res, next) {
    const tags = req.param('tags') || null;
   
    const options = {
        "headers": { "content-type": "application/json" },
        "url": config.apiServer + '/' + config.endPoints.photos_public,
    }

    if (tags) {
        options.qs = {tags: tags}
    }

    console.log('options', options);

    request.get(options, (error, response, body) => {
        if(error) {
            res.json(error);
        }
        xml2js.parseString(body, function (err, result) {
            res.header("Access-Control-Allow-Origin", "*");
            res.json(result.feed.entry);
        });
    });
}
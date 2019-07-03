/* 
* config.js - Application Configuration
* author: Ved Maurya
*/
process.NODE_ENV = process.NODE_ENV ? process.NODE_ENV : 'development'
module.exports = {  
  development: {
	 port: 8080,
     apiServer: 'https://www.flickr.com/services/feeds',
     endPoints: {
        photos_public: 'photos_public.gne'
     }
  } 
}
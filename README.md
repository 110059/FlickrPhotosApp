# Start API Server:

>> cd photos-app-node-angular-express-bootstrap/api

>> npm install

>> npm start

# API 

>> Get Flickr Public Photo::

/flickr/photos

>> With tags::

/flickr/photos?tags=tag1,tag2....

>> Example::

http://localhost:8080/flickr/photos?tags=canada

http://localhost:8080/flickr/photos?tags=singapore,usa

# Start Angular UI Server

>> cd photos-app-node-angular-express-bootstrap/AngularUI

>> npm install

>> ng serve

# Access the Application

>> http://localhost:4200/photos

# Note

Port 8080, 4200 should be unblock. Else change it accordingly
for api server port can be changed in config.js. Update the same in UI also.

Must have access to flickr Apis



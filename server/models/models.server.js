var connectionString = 'mongodb://127.0.0.1:27017/veggie-boy-pizza'; // for local


if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely

  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment

  var password = process.env.MLAB_PASSWORD_WEBDEV;

  connectionString = 'mongodb://' + username + ':' + password;

  connectionString += '@ds213255.mlab.com:13255/heroku_pt1hctp1'; // use yours
}
//import mongoose library

var mongoose = require("mongoose");
// connect server with database
var db = mongoose.connect(connectionString, { useNewUrlParser: true } 
    );
  


module.exports = db;





  connectionString += '@ds039095.mlab.com:39095/heroku_wtsbl182';// use yours


var mongoose = require("mongoose");
// import mongoose library
var db = mongoose.connect(connectionString,
    {useNewUrlParser: true}
    );
// connet server with database

module.exports = db;
// export this file

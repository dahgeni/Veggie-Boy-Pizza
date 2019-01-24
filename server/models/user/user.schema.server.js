var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
<<<<<<< HEAD
    username: String,
    password: String,
    admin: {type: Boolean, default: false},
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    email: {type: String, default: ""},
    dateCreated: {type: Date, default: Date.now}
}, {collection: "user"}
);
module.exports = UserSchema;
=======
    
    username: String,
    password: String,
    admin: {type: Boolean, default: false},
    firstName: {type: String, default: ""}, 
    lastName: {type: String, default: ""},
    email: {type: String, default: ""},
    dataCreated: {type: Date, default: Date.now }
}, {collection: "user" });

module.exports = UserSchema
   

>>>>>>> reservation

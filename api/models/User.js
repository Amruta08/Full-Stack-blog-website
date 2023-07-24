const mongoose = require('mongoose');
const {Schema, model} = mongoose;

// Create UserSchema for our collection
const UserSchema = new Schema({
    username:{type:String, required:true, min:4, unique:true},
    password:{type:String, required:true}
})

// Create mongoose model
const UserModel = model("User", UserSchema);

module.exports = UserModel;
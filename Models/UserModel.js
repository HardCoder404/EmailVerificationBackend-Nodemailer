const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    },
    isVerified: {
        type:Boolean,
        default:false,
    },
    verificationCode:String,
},{timestamps:true});


const userModel = mongoose.model("User",UserSchema);
module.exports = userModel;
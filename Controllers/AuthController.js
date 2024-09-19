const {sendVerificationCode,welcomeEmail} = require("../Middlewares/Email.js");
const userModel = require("../Models/UserModel.js");
const bcryptjs = require('bcryptjs');


const register = async(req,res) =>{
    try {
        const {email,password,name} = req.body;
        if(!email || !password || !name){
            return res.status(400).json({ message:"All fields are required", success: false });
        };

        const user = await userModel.findOne({email});
        if(user){
            return res.status(400).json({ message:"User already Exits", success: false })
        };
        
        const hashedPassword = await bcryptjs.hashSync(password,10);
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        const newUser = new userModel({
            email,
            password:hashedPassword,
            name,
            verificationCode,
        });

        await newUser.save();        
        sendVerificationCode(newUser.email,verificationCode);

        return res.status(200).json({ message:"Register Successfull", success: true })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message:error.message , success: false })
    }
};

const verifyEmail = async(req,res) =>{
    try {
      const {code} = req.body;
      const user = await userModel.findOne({
        verificationCode:code,
      });
      if(!user){
        return res.status(400).json({ message:"Expire Code or Invalid", success: false })
      };

      user.isVerified = false;
      user.verificationCode = undefined;

      await user.save();
      await welcomeEmail(user.email,user.name);
      return res.status(201).json({ message:"User Verified successfully", success: true })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message:error.message , success: false })
    }
}


module.exports = {
    register, verifyEmail
}
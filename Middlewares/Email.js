const transporter  = require("./EmailConfig.js");
const { Verification_Email_Template, Welcome_Email_Template } = require("./EmailVerificationTemplate.js");

const sendVerificationCode = async(email,verificationCode) =>{
    try {
        const response = await transporter.sendMail({
            from: '"EmailVerification 👻" <senderMail>', // sender address
            to: email, // list of receivers
            subject: "Verify Your Email", // Subject line
            text: "Verify Your Email", // plain text body
            html: Verification_Email_Template.replace("{verificationCode}",verificationCode), // html body
          });
          console.log("Email sent successfully",response);
          
    } catch (error) {
        console.log("Error: ",error);
    }
}

const welcomeEmail = async(email,name) =>{
    try {
        const response = await transporter.sendMail({
            from: '"EmailVerification 👻" <senderMail>', // sender address
            to: email, // list of receivers
            subject: "Verify Your Email", // Subject line
            text: "Verify Your Email", // plain text body
            html: Welcome_Email_Template.replace("{name}",name), // html body
          });
          console.log("Email sent successfully",response);
          
    } catch (error) {
        console.log("Error: ",error);
    }
}

module.exports = {sendVerificationCode,welcomeEmail};
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "Enter your email from which you want to send mails",
    pass: "Enter Your Passkey",
  },
});

module.exports = transporter;



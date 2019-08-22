var User       = require("../models/user");
var nodemailer = require("nodemailer")

var Otp = Math.floor(1000 + Math.random() * 9000);

var nodemailer=require("nodemailer")
var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "nipul00rock@gmail.com",
        pass: "nipul0@singal"
    }
});
let info = transporter.sendMail({
    to: req.body.email, // list of receivers
    subject: 'OTP for Email Verification', // Subject line
    text: Otp.toString() // plain text body
});

console.log('Message sent: %s', info.messageId);

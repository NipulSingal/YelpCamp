var otp = Math.floor(1000 + Math.random() * 9000);

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
    to: 'nipulsingal123@gmail.com', // list of receivers
    subject: 'OTP for Email Verification', // Subject line
    text: otp.toString() // plain text body
});

console.log('Message sent: %s', info.messageId);

const express=require("express")
const {quions_Model}=require("../Models/quionModel")
const router=express.Router();
router.get("/",async (req,res)=>{
  let data=  await quions_Model.find({})
 res.json(data);
})
const nodemailer = require('nodemailer');

// יצירת transporter (שרת SMTP לשליחה)
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // שרת SMTP, לדוגמה: Gmail - smtp.gmail.com
  port: 587, // יציאה (587 עבור TLS או 465 עבור SSL)
  secure: false, // true עבור SSL, false עבור TLS
  auth: {
    user: 'your-email@example.com', // האימייל שלך
    pass: 'your-email-password' // הסיסמה שלך
  }
});

// הגדרות המייל
const mailOptions = {
  from: '"Your Name" <your-email@example.com>', // השולח
  to: 'recipient@example.com', // כתובת הנמען
  subject: 'צפו באתר שלך', // נושא
  text: 'This is a test email sent using Node.js!', // תוכן המייל בפורמט טקסט
  html: '<b>This is a test email sent using Node.js!</b>' // תוכן המייל בפורמט HTML
};

router.get("/send_email",async (req,res)=>{
  let data=  await quions_Model.find({})
 res.json(data);

// שליחת המייל
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent successfully!');
    console.log('Server Response:', info);
  }
});
})


module.exports= router; 
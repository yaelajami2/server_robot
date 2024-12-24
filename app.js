const express=require('express');
const http=require('http');
require('dotenv').config();
const app=express();
const mongoose=require('./db/mongoose');
const cors = require('cors');
app.use(cors({
  origin: 'https://yael-ajami.onrender.com',  // אין סלאש בסוף
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // הגדרת שיטות HTTP מותרות
  allowedHeaders: ['Content-Type', 'Authorization']  // הגדרת כותרות מותרות
}));
const routs_managment=require('./routes/routs_managment');
let port=(process.env.PORT).toString()|"3000"
console.log(process.env.PORT);

routs_managment(app)
const server=http.createServer(app);
server.listen(port)




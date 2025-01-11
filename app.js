const express=require('express');
const http=require('http');
require('dotenv').config();
const app=express();
const mongoose=require('./db/mongoose');
const cors = require('cors');
app.use(cors({
  origin: 'https://angular-mongo.onrender.com', // Your Angular app's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Or allow all origins (less secure, use with caution)
app.use(cors());
const routs_managment=require('./routes/routs_managment');
let port=(process.env.PORT).toString()|"3000"
console.log(process.env.PORT);

routs_managment(app)
const server=http.createServer(app);
server.listen(port)




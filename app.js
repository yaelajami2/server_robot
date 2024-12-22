const express=require('express');
const http=require('http');
require('dotenv').config();
const mongoose=require('./db/mongoose');

const routs_managment=require('./routes/routs_managment');
let port=(process.env.PORT).toString()|"3000"
console.log(process.env.PORT);
const app=express();
routs_managment(app)
const server=http.createServer(app);
server.listen(port)




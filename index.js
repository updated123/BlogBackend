import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from './routes/AuthRoute.js';
import PostRoute from './routes/PostRoute.js';


dotenv.config()
const app=express();
app.use(bodyParser.json({limit:'30mb', extended: true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}));

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_DB
,
{useNewUrlParser: true})
.then(()=>
app.listen(process.env.PORT,()=>
console.log(`Listening at port no. ${process.env.PORT}`)))
.catch((error)=>console.log(error));


app.use('/auth',AuthRoute)
app.use('/post',PostRoute)
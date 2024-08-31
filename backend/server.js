import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import blogRoute from './routes/blogs.js';



const app = express();
const port = process.env.PORT;

//middleware

app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
})


//get middleware
app.use('/api/blogs', blogRoute)


app.listen(port, () =>{
    console.log("The Server is listening on port: ", port);
})
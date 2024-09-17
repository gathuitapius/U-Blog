import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from '../backend/routes/users.js'
import blogRoute from '../backend/routes/blogs.js'
import authRoute from '../backend/routes/authenticate.js'
import commentsRoute from './routes/comment.js';
import {requireAuth} from '../backend/middleware/Auth.js'
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT;

//middleware
app.use(express.json())
app.use(cookieParser());

app.use((req, res, next) =>{console.log(req.path, req.method); next();
})
//get 
app.use('/api/auth', authRoute)
app.use('/api/blogs', blogRoute)
app.use('/api/users', userRoute)
app.use('/api/blogs/blog', commentsRoute)

mongoose.connect('mongodb://0.0.0.0:27017/blogs')
.then(() => {
    //Listenning for requests
    app.listen(port, () =>{ console.log("Connected to DB && listening on port: ", port)})
})
.catch((error) => {console.error(error)})


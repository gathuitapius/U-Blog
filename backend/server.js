import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import userRoute from '../backend/routes/users.js'
import blogRoute from '../backend/routes/blogs.js'



const app = express();
const port = process.env.PORT;

//middleware

app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
})


//get middleware
app.use('/api/blogs', blogRoute)
app.use('/api/users', userRoute)

mongoose.connect('mongodb://0.0.0.0:27017/blogs')
.then(() => {
    //Listenning for requests
    app.listen(port, () =>{
        console.log("Connected to DB && listening on port: ", port); 
    })
})
.catch((error) => {
    console.error(error)
})


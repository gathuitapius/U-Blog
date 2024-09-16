import express from 'express';
import {Login, logout, SignUp } from '../Controllers/AuthController.js'




const router = express.Router();


//Login
router.post('/login', Login);


//Create user
router.post('/signup', SignUp);

//logout
router.post('/logout', logout)

//get logged in user
  




export default router;

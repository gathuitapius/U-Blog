import express from 'express';
import { Login, SignUp } from '../Controllers/AuthController.js'




const router = express.Router();


//Login
router.post('/login', Login);


//Create user
router.post('/signup', SignUp);


export default router;

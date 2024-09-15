import express from 'express';
import { Login, SignUp } from '../Controllers/AuthController';




const router = express.Router();


//Login
router.get('/login', Login);


//Create user
router.post('/signup', SignUp);


export default router;

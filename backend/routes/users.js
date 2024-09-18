import express from 'express';
import {
    RegisterUSer, 
    getAllUsers, 
    getSingleUser, 
} from '../Controllers/userController.js'


const router = express.Router();


//Get all Blogs
router.get('/', getAllUsers)


//Get a single blog
router.get('/:id', getSingleUser)

//create new blog
router.post('/', RegisterUSer);


export default router;
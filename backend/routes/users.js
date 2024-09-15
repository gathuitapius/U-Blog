import express from 'express';
import {
    RegisterUSer, 
    deleteUser, 
    getAllUsers, 
    getSingleUser, 
    getSingleUserByEmail, 
    updateUser
} from '../Controllers/userController.js'


const router = express.Router();


//Get all Blogs
router.get('/', getAllUsers)


//Get a single blog
router.get('/:id', getSingleUser)

//Get a user by EMail
router.get('/:email', getSingleUserByEmail)

//create new blog
router.post('/', RegisterUSer);

//create new blog
router.put('/:id', updateUser)

//delete blog
router.delete('/:id', deleteUser)


export default router;
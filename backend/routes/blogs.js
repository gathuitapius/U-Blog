import express from 'express';
import {createBlog, deleteAllBlogs, deleteBlog, getAllBlogs, getSingleBlog} from '../Controllers/blogController.js'


const router = express.Router();


//Get all Blogs
router.get('/', getAllBlogs)


//Get a single blog
router.get('/:id', getSingleBlog)

//create new blog
router.post('/', createBlog);

//create new blog
router.put('/:id', (req, res) =>{
    res.json({mssg : "UPDATE a Blog"})
})

//delete all blogs
router.delete('/all', deleteAllBlogs);
//delete blog
router.delete('/:id', deleteBlog)


export default router;
import express from 'express';
import Blog from '../models/blogs.js'


const router = express.Router();


//Get all Blogs
router.get('/', (req, res) =>{
    res.json({mssg : "GET all blogs"})
})


//Get a single blog
router.get('/:id', (req, res) =>{
    res.json({mssg : "GET single Blog"})
})

//create new blog
router.post('/', async (req, res) =>{
    const {title, blog_image, content} = req.body;

    try{
        const blog = await Blog.create({title, blog_image, content});
        res.status(200).json(blog);

    } catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({mssg : "CREATE new Blog"})
})

//create new blog
router.put('/:id', (req, res) =>{
    res.json({mssg : "UPDATE a Blog"})
})

//delete blog
router.delete('/:id', (req, res) =>{
    res.json({mssg : "DELETE a Blog"})
})

export default router;
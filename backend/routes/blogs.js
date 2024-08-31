import express from 'express';



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
router.post('/', (req, res) =>{
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
import Blog from '../models/blogs.js'

//GET all Blogs
//GET a single Blog
//CREATE a Blog

const createBlog = () =>{
    const {title, blog_image, content} = req.body;

    try{
        const blog = await Blog.create({title, blog_image, content});
        res.status(200).json(blog);

    } catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({mssg : "CREATE new Blog"})
}

//DELETE a Blog


exports default = {
    createBlog,
}
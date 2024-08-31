import Blog from '../models/blogs.js'
import mongoose from 'mongoose';

//GET all Blogs
export const getAllBlogs = async (req, res) => {
    try{
        const blogs = await Blog.find({}).sort({createdAt: -1});
        if(blogs.length < 1){
            return res.status(404).json({mssg: "No Available Blogs"})
        }
        res.status(200).json(blogs)
    } catch(error){
        res.status(400).json({error: error.message});
    }


}
//GET a single Blog

export const getSingleBlog = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({mssg:"Invalid Blog ID"})
    }
    const blog = await Blog.findById(id);
    if(!blog){
        return res.status(404).json({mssg:"Blog not found!"})
    }

    res.status(200).json(blog);

}
//CREATE a Blog

export const createBlog = async ( req, res ) =>{
    const {title, blog_image, content} = req.body;

    try{
        const blog = await Blog.create({title, blog_image, content});
        res.status(200).json(blog);

    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//Update Blog
export const updateBlog = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({mssg:"Invalid Blog ID"})
        }
    try{
    const blog = await Blog.findByIdAndUpdate(id, {...req.body},{new:true})
    if(!blog){ return res.status(404).json({mssg: "Blog not found"});}
    res.status(200).json(blog)
    } catch(error) {
        return res.status(400).json({error: error.message})
    }

}

//DELETE a Blog
export const deleteBlog = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg:"Invalid Blog ID"})
    }
    try{
    const blog = await Blog.findOneAndDelete(id)

    if (!blog) {
        return res.status(404).json({ mssg: "Blog not found" });
    }
    return res.status(200).json(blog)

    } catch(error) {
     return res.status(400).json({error: error.message})   
    }

}

// delete all blogs
export const deleteAllBlogs = async (req, res) =>{
    try{
    const blogs = await Blog.find({});
    if(blogs.length < 1){
        return res.status(404).json({mssg: "No blogs to delete"})
    }


    for(let i = 0; i < blogs.length; i++){ //ALso can use await Blog.deleteMany({})
        const id = blogs[i]._id;
        await Blog.findByIdAndDelete(id);
    }
    return res.status(200).json({ mssg: `${blogs.length} blogs deleted` });

} catch(error) {
    return res.status(400).json({mssg: error.message})
}


}

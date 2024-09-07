import "./Blog.sass"
import blogpic from "../assets/blogimg.png"
import { Link } from "react-router-dom"
import axios from "axios";

// Icons
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useEffect } from "react";


const Blog = ({ blog }) =>{

    const handleDelete = async (e) => {
        e.preventDefault()
        const id = blog._id
        try{
            const blog = await axios.delete(`/api/blogs/${id}`)
            console.log(blog)
        } catch(error) {
            console.error(error.message)
        }
    }
    return <div className="blog">
        <div className="blogImg">
            <img src={blog.blog_image > 0 ? blog.blog_image : blogpic} alt={blog.title ||"Blog pic"}/>
        </div>
        <div className="blogSummary">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
                  <button><Link to="/blog">Read More..</Link></button>
        </div>
        <div className="actions">
            <DeleteForeverIcon 
            className="icon-del"
            onClick={handleDelete}
            />
            <ModeEditIcon
            className="icon-edit"
            />
        </div>
    </div>
}

export default Blog
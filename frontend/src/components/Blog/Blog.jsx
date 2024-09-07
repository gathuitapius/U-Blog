import "./Blog.sass"
import blogpic from "../assets/blogimg.png"
import { Link } from "react-router-dom"
import axios from "axios";

// Icons
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useEffect, useState } from "react";
import { AddBlog } from "../../popUps/Register/AddBlog";
import { useBlogsContext } from "../../hooks/useBlogsContext";


const Blog = ({ blog }) =>{
    const { dispatch }  = useBlogsContext()
    const [clicked, setClicked] = useState(false)

    const handleDelete = async (e) => {
        e.preventDefault()
        const id = blog._id
        try{
            const blog = await axios.delete(`/api/blogs/${id}`)
            console.log(blog)
            if(blog.status === 200){
                dispatch(
                    {
                        type: "DELETE_BLOG", payload: blog
                    }
                )
            }
        } catch(error) {
            console.error(error.message)
        }
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        setClicked(true)
    }
    return <div className="blog">
        {clicked && <AddBlog blog={blog}/>}
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
            onClick={handleEdit}
            />
        </div>
    </div>
}

export default Blog
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
            const response = await axios.delete(`/api/blogs/${id}`)
            console.log(response.data)
            if(response.status === 200){
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

    return <div className="blog">
        {clicked && <AddBlog blog={blog} setClicked={setClicked} clicked = {clicked}/>}
        <div className="blogImg">
            <img src={blog.blog_image > 0 ? blog.blog_image : blogpic} alt={blog.title ||"Blog pic"}/>
        </div>
        <div className="blogSummary">
            <h2>{blog.title}</h2>
            <p>{blog.content.slice(0, 300)}...</p>
                  <button><Link to="/blog">Read More..</Link></button>
        </div>
        <div className="actions">
            <DeleteForeverIcon 
            className="icon-del"
            onClick={handleDelete}
            />
            <Link to={`/updateblog/${blog._id}`}>
            <ModeEditIcon
            className="icon-edit"
            />
            </Link>
        </div>
    </div>
}

export default Blog
import "./Blogs.sass"
import Blog from "../../components/Blog/Blog.jsx"
import { useEffect, useState } from "react"
import axios from 'axios'
import { useBlogsContext } from "../../hooks/useBlogsContext.jsx"

import AddIcon from '@mui/icons-material/Add';
import { AddBlog } from "../../popUps/Register/AddBlog.jsx"
import { Link, NavLink } from "react-router-dom"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



export const Blogs = () => {
     
    const {blogs, dispatch} = useBlogsContext()
    console.log("Blogs from context:", blogs);
    useEffect(() => {
        const getBlogs = async () => {
          const token = localStorage.getItem("token");
          try {
            const response = await axios.get("/api/blogs/");
            if(response.status === 200){
                dispatch({type:"SET_BLOGS", payload: response.data})
            }
            console.log("API Response:", response.data);
          } catch (error) {console.error("Error fetching blogs:", error)}
        };
        getBlogs();
      }, [dispatch]);

    return <div className="blogs">
      <Link to="/newblog">
        <AddCircleOutlineIcon className="add-blog"/>
      </Link>
        {blogs && blogs.length > 0 ? (blogs.map((blog) =>(
          <Link to={`/blog/${blog._id}`}>
            <Blog key={blog._id} blog={blog}/>
          </Link>
        ))
    ) : (
        <p>No Blogs to Show</p>
    )}
    </div>
}
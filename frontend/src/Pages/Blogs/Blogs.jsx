import "./Blogs.sass"
import Blog from "../../components/Blog/Blog.jsx"
import { useEffect, useState } from "react"
import axios from 'axios'
import { useBlogsContext } from "../../hooks/useBlogsContext.jsx"

import AddIcon from '@mui/icons-material/Add';
import { AddBlog } from "../../popUps/Register/AddBlog.jsx"



export const Blogs = () => {
    const {blogs, dispatch} = useBlogsContext()
    console.log("Blogs from context:", blogs);
    useEffect(() => {
        const getBlogs = async () => {
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
        {blogs && blogs.length > 0 ? (blogs.map((blog) =>(<Blog key={blog._id} blog={blog}/>))
    ) : (
        <p>No Blogs to Show</p>
    )}
    </div>
}
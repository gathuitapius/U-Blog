import "./Blogs.sass"
import Blog from "../../components/Blog/Blog.jsx"
import { useEffect, useState } from "react"
import axios from 'axios'
export const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const getBlogs = async () => {
          try {
            const response = await axios.get("/api/blogs/");
            setBlogs(response.data);
            console.log("API Response:", response.data);
          } catch (error) {
            console.error("Error fetching blogs:", error);
          }
        };
        getBlogs();
      }, []);

    return <div className="blogs">
        {blogs && blogs.length > 0 ? (blogs.map((blog) =>(
            <Blog key={blog._id} blog={blog}/>
        ))
    ) : (
        <p>No Blogs to Show</p>
    )}
    </div>
}
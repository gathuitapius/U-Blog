import "./Blogs.sass"
import Blog from "../../components/Blog/Blog.jsx"
import { useEffect, useState } from "react"
import axios from 'axios'
export const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const getBlogs = async() => {
            const response = await axios.get("/api/blogs")
            .then((response) => {
                setBlogs(response.data)
                console.log(response)
            })

        }
        getBlogs()
    },[])

    return (<div className="blogs">
        {blogs && blogs.map((blog) =>{
            // <Blog 
            // key={blog._id}
            // blog={blog}/>
            <p>{blog.title}</p>
        })}
    </div>)
}
import "./Blog.sass"
import blogpic from "../assets/blogimg.png"
import { Link } from "react-router-dom"
const Blog = ({ blog }) =>{
    return <div className="blog">
        <div className="blogImg">
            <img src={blog.blog_image || blogpic} alt="Blog pic"/>
        </div>
        <div className="blogSummary">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
                  <button><Link to="/blog">Read More..</Link></button>
        </div>
    </div>
}

export default Blog
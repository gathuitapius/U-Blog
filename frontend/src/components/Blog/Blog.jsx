import "./Blog.sass"
import blogpic from "../assets/blogimg.png"
import { Link } from "react-router-dom"
const Blog = () =>{
    return <div className="blog">
        <div className="blogImg">
            <img src={blogpic} alt="Blog pic"/>
        </div>
        <div className="blogSummary">
            <h2>Blog Title</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Deserunt necessitatibus voluptate facilis excepturi laborum
                 eveniet eius ipsam alias iste odio! Facere voluptates quia
                  cumque ullam, fugiat maxime quae deserunt eius.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Deserunt necessitatibus voluptate facilis excepturi laborum
                 eveniet eius ipsam alias iste odio! Facere voluptates quia
                  cumque ullam, fugiat maxime quae deserunt eius.</p>
                  <button><Link to="/blog">Read More..</Link></button>
        </div>
    </div>
}

export default Blog
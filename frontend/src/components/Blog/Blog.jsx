import "./Blog.sass"
import blogpic from "../assets/blogimg.png"
const Blog = () =>{
    return <div className="blog">
        <div className="blogImg">
            <img src={blogpic} alt="Blog pic"/>
        </div>
        <div className="blogSummary">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Deserunt necessitatibus voluptate facilis excepturi laborum
                 eveniet eius ipsam alias iste odio! Facere voluptates quia
                  cumque ullam, fugiat maxime quae deserunt eius.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Deserunt necessitatibus voluptate facilis excepturi laborum
                 eveniet eius ipsam alias iste odio! Facere voluptates quia
                  cumque ullam, fugiat maxime quae deserunt eius.</p>
                  <button>Read More..</button>
        </div>
    </div>
}

export default Blog
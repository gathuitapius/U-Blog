import "./Blog.sass"
import thump from "../../components/assets/blogimg.png"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Comment } from "../../components/Comment/Comment.jsx";

//icons
import SendRoundedIcon from '@mui/icons-material/SendRounded';


export const Blog = () => {
    const [blog, setBlog] = useState(null);
    const [comment, setComment] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [chat, setChat] = useState(null);
    const {blogId} = useParams()
    const navigate = useNavigate()

    const { id } = useParams();
    useEffect(() => {
        const fetchBlog = async () => {
          try {
            const response = await axios.get(`/api/blogs/blog/${id}`);
            setBlog(response.data);
            console.log(response.data)
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchBlog();
      }, [id]);

      useEffect(() => {
        const fetchComments = async () => {
          try {
            const response = await axios.get(`/api/blogs/blog/${id}/comments`);
            setComment(response.data);
            console.log(response.data)
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchComments();
      }, [id]);

      const handleComment = async (e) =>{
        e.preventDefault()
        if (!chat.trim()) {
          alert("Comment cannot be empty!");
          return;
      }
        try {
          const comment = await axios.post(`/api/blogs/blog/${id}/comments`,{blogId, chat, userName: "Current User"} );
          setComment((prevComments) => [...prevComments, comment.data]);
          setChat(''); // Clear the input field
          navigate(`/blog/${id}`)

        } catch (error) {
          console.log(error.message);
        }

      }

    return <div className="singleBlog">
        <div className="blogthumnail">
            <img src={thump} alt="Thumpnail"/>
        </div>
        { blog &&
        <div className="content">
            <h3>{blog.title}</h3>
            <article>
                <p>
                    {blog.content}
                </p>
                
            </article>

        </div>
}
        <div className="commentsTitle">
        <h2>Comments</h2>
        </div>
        {/* <div className="comments">
          {comment && comment.map((chat) =>(
            <div  key={chat._id} className="comment">
                <div className="commentMetaData">
                <p>@username</p>
                <div className="timestamp">
                <p>{new Date(chat.createdAt).toLocaleTimeString()}</p>
                <p>{new Date(chat.createdAt).toLocaleDateString()}</p>
                </div>
                </div>
                <div className="commentMessage">
                    <p>{chat.chat}</p>
                </div>

            </div>
        ))} */}
        {comment && comment.map((chat) => (

        <Comment 
        key={chat._id} 
        comment ={comment} 
        handleComment={handleComment} 
        setChat={setChat}
        chat={chat}
        />
        ))
        }
            <div className="inputcomment">
                    <textarea 
                    type="text" 
                    placeholder="Enter Comment..."
                    onChange={(e) => setChat(e.target.value)}
                    />
                    <SendRoundedIcon className="send" onClick={handleComment}/>
                </div>
        </div>
    // </div>
}
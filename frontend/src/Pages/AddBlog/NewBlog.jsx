import { useState } from 'react'
import './NewBlog.sass'
import axios from 'axios';
export const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [blogImg, setBlogImg] = useState(null);
    const [content, setContent] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const blog = {title, blogImg, content}

        console.table(blog)

        if(!title && content){
            console.log("Title or Content cant be empty!")
        }

        try {
            const response = await axios.post('/api/blogs', {blog});
            console.log(response);
        } catch (error) {
            console.log(error.message)
            
        }

    }

    return(
        <div className="new-blog">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label>Title</label>
                    <input type='text' 
                    required 
                    placeholder='Enter Blog title'
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="input">
                    <label>Image</label>
                    <input type="file" 
                    onChange={(e) => setBlogImg(e.target.files[0])}
                    accept="image/*"/>
                </div>
                <div className="input">
                    <label htmlFor="content">Content</label>
                    <textarea 
                    name="content" 
                    id="content"
                    placeholder='Write your Blog here...'
                    onChange={(e) => setContent(e.target.value)}
                    >
                    </textarea>
                </div>
                <button type='submit'>Add Blog</button>
            </form>
        </div>
    )
}
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './blog.sass';
import axios from 'axios';

export const UpdateBlog = () => {
    const [title, setTitle] = useState('');
    const [blog_image, setBlogimg] = useState('imga.png');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    // Fetch blog data when the component mounts
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`/api/blogs/blog/${id}`);
                setTitle(response.data.title);
                setBlogimg(response.data.blog_image);
                setContent(response.data.content);
            } catch (error) {
                console.log('Error fetching blog:', error.message);
            }
        };

        fetchBlog();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`/api/blogs/${id}`, {
                title,
                blog_image,
                content
            });
            console.log(response);
            console.log(title, blog_image, content);

            // Redirect to blogs list after successful update
            navigate('/blogs');
        } catch (error) {
            console.log('Error:', error.message);
            alert('Failed to update blog: ' + error.message);
        }
    };

    return (
        <div className="new-blog">
            <h2>Update Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label>Title</label>
                    <input
                        type='text'
                        required
                        placeholder='Enter Blog title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="input">
                    <label>Image URL</label>
                    <input
                        type='text'
                        required
                        placeholder='Enter Blog image URL'
                        value={blog_image}
                        onChange={(e) => setBlogimg(e.target.value)}
                    />
                </div>
                <div className="input">
                    <label>Content</label>
                    <textarea
                        cols='50'
                        rows='10'
                        required
                        placeholder='Enter Blog Content'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button type='submit'>Update Blog</button>
            </form>
        </div>
    );
};

// import { useState } from 'react'
// import './NewBlog.sass'
// import axios from 'axios';
// export const NewBlog = () => {
//     const [title, setTitle] = useState('');
//     const [blogImg, setBlogImg] = useState(null);
//     const [content, setContent] = useState('');


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if(!title || !content){
//             console.log("Title or Content cant be empty!")
//         }
//         // Create a new FormData object
//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('blogImg', blogImg); // Append the selected file
//         formData.append('content', content);

//         try {
//             const response = await axios.post('/api/blogs/', formData,
//                 {
//                     headers: {
//                         'Content-Type': 'multipart/form-data', // Necessary for file uploads
//                     },
//                 });
//             console.log(response);
//             console.log(formData)
//         } catch (error) {
//             console.log(error.message)
            
//         }

//     }

//     return(
//         <div className="new-blog">
//             <h2>Add New Blog</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="input">
//                     <label>Title</label>
//                     <input type='text' 
//                     required 
//                     placeholder='Enter Blog title'
//                     onChange={(e) => setTitle(e.target.value)}
//                     />
//                 </div>
//                 <div className="input">
//                     <label>Image</label>
//                     <input type="file" 
//                     onChange={(e) => setBlogImg(e.target.files[0])}
//                     accept="image/*"/>
//                 </div>
//                 <div className="input">
//                     <label htmlFor="content">Content</label>
//                     <textarea 
//                     name="content" 
//                     id="content"
//                     placeholder='Write your Blog here...'
//                     onChange={(e) => setContent(e.target.value)}
//                     >
//                     </textarea>
//                 </div>
//                 <button type='submit'>Add Blog</button>
//             </form>
//         </div>
//     )
// }



import { useState } from 'react';
import './NewBlog.sass';
import axios from 'axios';

export const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [blogImg, setBlogImg] = useState(null);
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false); // For handling form submission state
    const [error, setError] = useState(''); // To handle error messages
    const [success, setSuccess] = useState(''); // To show success message

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Clear previous error or success messages
        setError('');
        setSuccess('');

        if (!title || !content) {
            setError("Title or content can't be empty!");
            return;
        }

        // Create a new FormData object
        // const formData = new FormData();
        // formData.append('title', title);
        // //formData.append('blogImg', blogImg); // Append the selected file
        // formData.append('content', content);
        const blog = {title, content}

        setLoading(true); // Start loading before the request

        try {
            const response = await axios.post('/api/blogs/', blog, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Necessary for file uploads
                },
            });
            console.log(response);
            console.log(blog);

            // Success: Set success message and reset form
            setSuccess('Blog added successfully!');
            setTitle('');
            setContent('');
            setBlogImg(null);

        } catch (error) {
            console.log(error.message);
            setError('Failed to add blog. Please try again.');
        } finally {
            setLoading(false); // Stop loading once the request finishes
        }
    };

    return (
        <div className="new-blog">
            <h2>Add New Blog</h2>

            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}

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
                    <label>Image</label>
                    <input 
                        type="file" 
                        onChange={(e) => setBlogImg(e.target.files[0])} 
                        accept="image/*" 
                    />
                </div>

                <div className="input">
                    <label htmlFor="content">Content</label>
                    <textarea 
                        name="content" 
                        id="content" 
                        placeholder='Write your Blog here...' 
                        value={content}
                        onChange={(e) => setContent(e.target.value)} 
                    ></textarea>
                </div>

                <button type='submit' disabled={loading}>
                    {loading ? 'Submitting...' : 'Add Blog'}
                </button>
            </form>
        </div>
    );
};

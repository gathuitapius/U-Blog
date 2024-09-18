import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './NewBlog.sass'
import axios from 'axios';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import {
//   ClassicEditor,
//   Bold,
//   Essentials,
//   Heading,
//   Indent,
//   IndentBlock,
//   Italic,
//   Link,
//   List,
//   MediaEmbed,
//   Paragraph,
//   Table,
//   Undo
// } from 'ckeditor5';

export const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [blog_image, setBlogimg] = useState('imga.png')
    const [content, setContent] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(title)
        
        try {
            const response = await axios.post('/api/blogs/newblog', {title, blog_image , content})
            console.log(response);
            console.log(title, content)
            navigate('/blogs')

        } catch (error) {
            console.log(error.message)
            alert(error)  
        }
    }
    return (
        <div className="new-blog">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label>Title</label>
                    <input type='text' 
                    required 
                    placeholder='Enter Blog title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="input">
                    <label>Image</label>
                    <input type='text' 
                    required 
                    placeholder='Enter Blog image'
                    value={blog_image}
                    onChange={(e) => setBlogimg(e.target.value)}
                    />
                </div>
                <div className="input">
                    <label>Content</label>
                    <textarea cols='50' rows='10' type='text' 
                    required 
                    placeholder='Enter Blog Content'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                {/* <CKEditor
      editor={ ClassicEditor }
      config={ {
        toolbar: [
          'undo', 'redo', '|',
          'heading', '|', 'bold', 'italic', '|',
          'link', 'insertTable', 'mediaEmbed', '|',
          'bulletedList', 'numberedList', 'indent', 'outdent'
        ],
        plugins: [
          Bold,
          Essentials,
          Heading,
          Indent,
          IndentBlock,
          Italic,
          Link,
          List,
          MediaEmbed,
          Paragraph,
          Table,
          Undo
        ],
        initialData: '<h1>Hello from CKEditor 5!</h1>',
      } }
    /> */}
                <button type='submit'>Add Blog</button>
            </form>
        </div>
    )
}

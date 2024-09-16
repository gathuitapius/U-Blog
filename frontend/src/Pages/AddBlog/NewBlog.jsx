import Blog from '../../../../backend/models/blogs'

export const NewBlog = () => {
    return(
        <div className="new-blog">
            <form>
                <div className="input">
                    <label>Title</label>
                    <input type='text' required placeholder='Enter Blog title'/>
                </div>
                <div className="input">
                    <label>Image</label>
                    <input type="file" />
                </div>
                <div className="input">
                    <label htmlFor="content">Content</label>
                </div>
            </form>
        </div>
    )
}
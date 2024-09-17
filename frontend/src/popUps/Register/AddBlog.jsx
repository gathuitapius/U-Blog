import "./AddBlog.sass"
export const AddBlog = ({blog, clicked, setClicked}) => {
    return <div className="register">
        <div className="close">
        <h3 onClick={() => setClicked(false)}>X</h3>
        </div>
        <div className="update-blog-form">
            <h1>Update Blog</h1>
        <form>
            <div className="inputs">
            <div className="input">
            <label>Title: </label>
            <input type="text" required placeholder="Enter Blog Title..."/>
            </div>
            <div className="input">
            <label>Image: </label>
            <input type="file"/>
            </div>
            <div className="input">
            <label>Content: </label>
            <textarea placeholder="Write your blog here ..."></textarea>
            </div>
            <button>Submit</button>
            </div>
        </form>
        </div>
    </div>
}
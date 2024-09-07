import "./AddBlog.sass"
export const AddBlog = ({blog}) => {
    return <div className="register">
        <p>Edit: {blog.title}</p>
        <form>
            <label>Title: </label>
            <input type="text"/>
            <label>Title: </label>
            <input type="text"/><label>Title: </label>
            <input type="text"/>

        </form>
    </div>
}
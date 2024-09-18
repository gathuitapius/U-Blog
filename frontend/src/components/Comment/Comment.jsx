import './Comment.sass';
export const Comment = ({comment}) => {
    return(
        <div className="comments">
          {comment && comment.map((chat) =>(
            <div  key={chat._id} className="comment">
                <div className="commentMetaData">
                {/* <p>{chat.userName}</p> */}
                <div className="timestamp">
                <p>{new Date(chat.createdAt).toLocaleTimeString()}</p>
                <p>{new Date(chat.createdAt).toLocaleDateString()}</p>
                </div>
                </div>
                <div className="commentMessage">
                    <p>{chat.chat}</p>
                </div>

            </div>
        ))}
         </div>
    )}
import mongoose from 'mongoose';


const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId;
const commentSchema = new Schema({
    userName : {
        type: String,
        required: false
    },

    blogId : {
        type: ObjectId,
        required: true
    },

    chat :{
        type:String,
        required: true
        
    }
    
    },{timestamps: true})

    export default mongoose.model('Comment', commentSchema);
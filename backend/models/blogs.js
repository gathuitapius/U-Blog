import mongoose from 'mongoose';

const Schema = mongoose.Schema


const blogSchema = new Schema({
    title : {
        type: String,
        required: true 
    },

    blog_mage: {
        type :String,
        required: true
    },
    content :{
        type:String,
        required: true
        
    }
    
    },{timestamps: true})

    export default mongoose.model('Blog', blogSchema);
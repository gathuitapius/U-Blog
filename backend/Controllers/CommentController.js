import Comment from '../models/comments.js'
import mongoose from 'mongoose';


//Get all blog comment
export const allBlogComment = async (req, res) => {
    try {
        const blogId = req.params.id
        const comments = await Comment.find({blogId: blogId});
        res.json(comments)
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}

export const WriteComment = async (req, res) => {
    const blogId = req.params.id; // Use blogId to match with req.body.blogId
    const { userName, chat } = req.body; // Extract necessary fields

    try {
        // Create a new comment
        const newComment = new Comment({
            userName,
            blogId,
            chat
        });

        // Save the comment to the database
        const savedComment = await newComment.save();

        // Respond with the saved comment
        res.status(201).json(savedComment);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ message: error.message });
    }
};

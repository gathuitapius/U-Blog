import { allBlogComment, WriteComment } from "../Controllers/CommentController.js";

import express from 'express';

const router = express.Router();

router.get('/:id/comments', allBlogComment);
router.post('/:id/comments', WriteComment);




export default router;
import { Router } from 'express';
import CommentController from '../controllers/commentController.js';

const CommentRoutes = Router();

CommentRoutes.get('/comments', CommentController.getAllComments);
CommentRoutes.get('/comments/:commentId', CommentController.getCommentById);
CommentRoutes.post('/comments', CommentController.createComment);
CommentRoutes.put('/comments/:commentId', CommentController.updateComment);
CommentRoutes.delete('/comments/:commentId', CommentController.deleteComment);

export default CommentRoutes;

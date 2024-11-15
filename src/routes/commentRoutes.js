import { Router } from 'express';
import CommentController from '../controllers/commentController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const CommentRoutes = Router();

CommentRoutes.get('/comment', CommentController.getAllComments);
CommentRoutes.get('/comment/:postId', CommentController.getCommentByPostId);
CommentRoutes.post('/comment', authMiddleware, CommentController.createComment);
CommentRoutes.put(
  '/comment/:commentId',
  authMiddleware,
  CommentController.updateComment,
);
CommentRoutes.delete(
  '/comment/:commentId',
  authMiddleware,
  CommentController.deleteComment,
);

export default CommentRoutes;

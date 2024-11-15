import { Router } from 'express'
import CommentController from '../controllers/commentController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const CommentRoutes = Router()

CommentRoutes.get('/comments', CommentController.getAllComments)
CommentRoutes.get('/comments/:postId', CommentController.getCommentByPostId)
CommentRoutes.post('/comments', authMiddleware, CommentController.createComment)
CommentRoutes.put(
  '/comments/:commentId',
  authMiddleware,
  CommentController.updateComment
)
CommentRoutes.delete(
  '/comments/:commentId',
  authMiddleware,
  CommentController.deleteComment
)

export default CommentRoutes

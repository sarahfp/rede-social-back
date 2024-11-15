import { Router } from 'express'
import PostController from '../controllers/postController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const PostRoutes = Router()

PostRoutes.get('/posts', PostController.getAllPosts)
PostRoutes.get('/posts/:postId', PostController.getPostById)
PostRoutes.post('/posts', authMiddleware, PostController.createPost)
PostRoutes.put('/posts/:postId', authMiddleware, PostController.updatePost)
PostRoutes.delete('/posts/:postId', authMiddleware, PostController.deletePost)

export default PostRoutes

import { Router } from 'express';
import PostController from '../controllers/postController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const PostRoutes = Router();

PostRoutes.get('/post', PostController.getAllPosts);
PostRoutes.get('/post/:postId', PostController.getPostById);
PostRoutes.post('/post', authMiddleware, PostController.createPost);
PostRoutes.put('/post/:postId', authMiddleware, PostController.updatePost);
PostRoutes.delete('/post/:postId', authMiddleware, PostController.deletePost);

export default PostRoutes;

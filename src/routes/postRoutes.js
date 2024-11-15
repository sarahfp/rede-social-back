import { Router } from 'express';
import PostController from '../controllers/postController.js';

const PostRoutes = Router();

PostRoutes.get('/posts', PostController.getAllPosts);
PostRoutes.get('/posts/:postId', PostController.getPostById);
PostRoutes.post('/posts', PostController.createPost);
PostRoutes.put('/posts/:postId', PostController.updatePost);
PostRoutes.delete('/posts/:postId', PostController.deletePost);

export default PostRoutes;

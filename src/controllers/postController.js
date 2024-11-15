import PostService from "../service/postService.js";

class PostController {
  static async getAllPosts(req, res) {
    try {
      const posts = await PostService.getAllPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getPostById(req, res) {
    try {
      const { postId } = req.params;
      const post = await PostService.getPostById(postId);
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createPost(req, res) {
    try {
      const post = await PostService.createPost(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updatePost(req, res) {
    try {
      const { postId } = req.params;
      const post = await PostService.updatePost(postId, req.body);
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletePost(req, res) {
    try {
      const { postId } = req.params;
      await PostService.deletePost(postId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default PostController;

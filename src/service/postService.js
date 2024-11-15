import Post from '../models/Post.js';

class PostService {
  static async getAllPosts() {
    return await Post.findAll();
  }

  static async getPostById(postId) {
    return await Post.findByPk(postId);
  }

  static async createPost(data) {
    return await Post.create(data);
  }

  static async updatePost(postId, data) {
    const post = await Post.findByPk(postId);
    if (post) {
      await post.update(data);
      return post;
    }
    throw new Error('Post not found');
  }

  static async deletePost(postId) {
    const post = await Post.findByPk(postId);
    if (post) {
      await post.destroy();
      return true;
    }
    throw new Error('Post not found');
  }
}

export default PostService

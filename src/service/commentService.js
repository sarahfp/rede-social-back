import Comment from '../models/Comment.js';

class CommentService {
  static async getAllComments() {
    return await Comment.findAll();
  }

  static async getCommentById(commentId) {
    return await Comment.findByPk(commentId);
  }

  static async createComment(data) {
    return await Comment.create(data);
  }

  static async updateComment(commentId, data) {
    const comment = await Comment.findByPk(commentId);
    if (comment) {
      await comment.update(data);
      return comment;
    }
    throw new Error('Comment not found');
  }

  static async deleteComment(commentId) {
    const comment = await Comment.findByPk(commentId);
    if (comment) {
      await comment.destroy();
      return true;
    }
    throw new Error('Comment not found');
  }
}

export default CommentService

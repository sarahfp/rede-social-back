import Comment from '../models/Comment.js';
import Post from '../models/Post.js';

class CommentService {
  static async getAllComments() {
    return await Comment.findAll();
  }

  static async getCommentByPostId(postId) {
    return await Comment.findAll({ where: { post_id: postId } });
  }

  static async createComment(data, user) {
    data.user_id = user.id;
    const post = await Post.findByPk(data.post_id);
    if (!post) {
      throw new Error('Post não existe');
    }
    return await Comment.create(data);
  }

  static async updateComment(commentId, data, user) {
    const comment = await Comment.findByPk(commentId);
    if (user.id != comment.user_id) {
      throw new Error('Comentário não pertence ao usuário');
    }
    if (comment) {
      await comment.update(data);
      return comment;
    }
    throw new Error('Comentário não encontrado');
  }

  static async deleteComment(commentId, user) {
    const comment = await Comment.findByPk(commentId);
    const post = await Post.findByPk(comment.post_id);
    if (user.id != comment.user_id && post.user_id != user.id) {
      throw new Error(
        'Comentário não pertence ao usuário nem ao criador do post.',
      );
    }
    if (comment) {
      await comment.destroy();
      return true;
    }
    throw new Error('Comentário não encontrado');
  }
}

export default CommentService;

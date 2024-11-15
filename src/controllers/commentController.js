import CommentService from '../service/commentService.js'

class CommentController {
  static async getAllComments(req, res) {
    try {
      const comments = await CommentService.getAllComments()
      res.json(comments)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getCommentByPostId(req, res) {
    try {
      const { postId } = req.params
      const comment = await CommentService.getCommentByPostId(postId)
      if (comment) {
        res.json(comment)
      } else {
        res.status(404).json({ error: 'Comentário não encontrado.' })
      }
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async createComment(req, res) {
    try {
      const comment = await CommentService.createComment(req.body, req.user)
      res.status(201).json(comment)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async updateComment(req, res) {
    try {
      const { commentId } = req.params
      const comment = await CommentService.updateComment(commentId, req.body)
      res.json(comment)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async deleteComment(req, res) {
    try {
      const { commentId } = req.params
      await CommentService.deleteComment(commentId)
      res.status(204).send()
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

export default CommentController

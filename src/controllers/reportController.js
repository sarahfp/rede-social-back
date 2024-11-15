import PostService from '../service/postService.js'

class ReportController {
  static async getReport(req, res) {
    try {
      const posts = await PostService.getAllPosts()
      res.json(posts)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

export default ReportController

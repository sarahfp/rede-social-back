import Connection from '../config/database.js'
import Post from '../models/Post.js'

class ReportService {
  static async getReport() {
    return await Post.findAll({
      attributes: ['title'],
      include: [
        {
          model: Comment,
          attributes: [
            [
              Connection.fn('COUNT', Connection.col('Comment.id')),
              'commentCount'
            ]
          ]
        }
      ],
      group: ['Post.id']
    })
  }
}

export default ReportService

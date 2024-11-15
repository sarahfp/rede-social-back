import Connection from '../config/database.js';
import Post from '../models/Post.js';

class ReportService {
  static async getReport() {
    return await Post.findAll({
      attributes: [
        'title',
        [
          Connection.literal(
            '(SELECT COUNT(*) FROM Comments WHERE Comments.post_id = Posts.id)',
          ),
          'commentCount',
        ],
      ],
      group: ['Posts.id'],
    });
  }
}

export default ReportService;

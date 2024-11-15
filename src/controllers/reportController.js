import ReportService from '../service/reportService.js';

class ReportController {
  static async getReport(req, res) {
    try {
      const posts = await ReportService.getReport();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default ReportController;

import { Router } from 'express'
import ReportController from '../controllers/reportController.js'

const ReportRoutes = Router()

ReportRoutes.get('/report', ReportController.getReport)

export default ReportRoutes

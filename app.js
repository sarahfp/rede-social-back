import express from 'express';
import UserRoutes from './src/routes/userRoutes.js';
import Connection from './src/config/database.js';
import PostRoutes from './src/routes/postRoutes.js';
import CommentRoutes from './src/routes/commentRoutes.js';
import AuthRoutes from './src/routes/authRoutes.js';
import dotenv from 'dotenv';
import ReportRoutes from './src/routes/reportRoutes.js';
import cors from 'cors';
dotenv.config();
const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

app.use('/api', UserRoutes);
app.use('/api', PostRoutes);
app.use('/api', CommentRoutes);
app.use('/api', AuthRoutes);
app.use('/api', ReportRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

Connection.sync()
  .then(() => {
    app.listen(3001, () => {
      console.log('Servidor rodando na porta 3001');
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
  });

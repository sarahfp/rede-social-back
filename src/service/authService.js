/* eslint-disable no-undef */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

class AuthService {
  static async login(email, password) {
    if (!email) throw new Error('Email não informado.');
    if (!password) throw new Error('Senha não informada;');
    const user = await User.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.SECRET_KEY,
        { expiresIn: '24h' },
      );
      return { token };
    }
    throw new Error('Usuário ou senha incorretos');
  }
}

export default AuthService;

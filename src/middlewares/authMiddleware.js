/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']
  if (!token) {
    return res.status(401).json({ message: 'Token Inválido' })
  }

  const bearerToken = token.split(' ')[1]

  try {
    const decoded = jwt.verify(bearerToken, process.env.SECRET_KEY)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Token Inválido' })
  }
}

export default authMiddleware

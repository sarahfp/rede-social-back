import UserService from '../service/userService.js'

class UserController {
  static async getUserById(req, res) {
    try {
      const { userId } = req.params
      const user = await UserService.getUserById(userId)
      if (user) {
        res.json(user)
      } else {
        res.status(404).json({ error: 'Usuário não encontrado.' })
      }
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async createUser(req, res) {
    try {
      const user = await UserService.createUser(req.body)
      res.status(201).json(user)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async updateUser(req, res) {
    try {
      const { userId } = req.params
      const user = await UserService.updateUser(userId, req.body)
      res.json(user)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async deleteUser(req, res) {
    try {
      const { userId } = req.params
      await UserService.deleteUser(userId)
      res.status(204).send()
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

export default UserController

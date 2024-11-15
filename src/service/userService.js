import User from '../models/User.js'

class UserService {
  static async getAllUsers() {
    return await User.findAll()
  }

  static async getUserById(userId) {
    return await User.findByPk(userId)
  }

  static async createUser(data) {
    return await User.create(data)
  }

  static async updateUser(userId, data) {
    const user = await User.findByPk(userId)
    if (user) {
      await user.update(data)
      return user
    }
    throw new Error('User not found')
  }

  static async deleteUser(userId) {
    const user = await User.findByPk(userId)
    if (user) {
      await user.destroy()
      return true
    }
    throw new Error('User not found')
  }
}

export default UserService

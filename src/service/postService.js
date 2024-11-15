import Post from '../models/Post.js'

class PostService {
  static async getAllPosts() {
    return await Post.findAll()
  }

  static async getPostById(postId) {
    return await Post.findByPk(postId)
  }

  static async createPost(data, user) {
    if (!data.title) throw new Error('Título do post é obrigatório.')
    if (!data.description) throw new Error('Descrição do post é obrigatória.')
    data.user_id = user.id
    return await Post.create(data)
  }

  static async updatePost(postId, data, user) {
    const post = await Post.findByPk(postId)
    data.user_id = user.id
    if (post) {
      if (user.id != post.user_id) {
        throw new Error('Este post não é seu.')
      }
      await post.update(data)
      return post
    }
    throw new Error('Post não encontrado.')
  }

  static async deletePost(postId, user) {
    const post = await Post.findByPk(postId)
    if (post) {
      if (user.id != post.user_id) {
        throw new Error('Este post não é seu.')
      }
      await post.destroy()
      return true
    }
    throw new Error('Post não encontrado')
  }
}

export default PostService

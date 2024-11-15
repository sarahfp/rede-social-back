import AuthService from "../service/authService.js";

class AuthController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const { token, user } = await AuthService.login(email, password);
      res.json({ token, user });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

export default AuthController

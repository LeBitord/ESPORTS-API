import { registerUser, loginUser } from "../services/auth.service.js";

export async function register(req, res) {
  try {
    const user = await registerUser(req.body);
    res.json({ message: "Utilisateur créé", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const data = await loginUser(email, password);
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

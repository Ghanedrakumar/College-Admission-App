import { Router } from 'express';
import SignupModel from '../Models/Signup.js';
import bcrypt from 'bcrypt';
const router = Router();



router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await SignupModel.findOne({ username, password });
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
      // Compare passwords
      const isMatch = bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials." });
      }
  
      // Respond with success
      res.status(200).json({ message: "Login successful!", user: { email: user.email } });
  
    } catch (error) {
      console.error("Error during login: ", error);
      res.status(500).json({ message: "Internal server error." });
    }
  
  
  })




export default router;
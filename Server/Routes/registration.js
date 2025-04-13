import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express, { Router } from 'express';
import signupModel from '../Models/Signup.js';
const router = express.Router();

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/signup', async (req, res) => {
    const { username, email, password, confirmPassword, phone } = req.body;
    console.log("Recieved data:", req.body)

    const signup = signupModel({
        username: username,
        password: password,
        email: email,
        confirmPassword: confirmPassword,
        phone: phone
    })
    await signup.save()
        .then(() => {
            res.status(200).json({ message: "Signup data saved successfully" });
        }
        ).catch((error) => {
            console.error("Error saving data:", error);
            res.status(500).json({ message: "Error saving data" });
        }
        )


})
export default router;
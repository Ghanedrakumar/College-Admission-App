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
    const { username,email,password,confirmPassword,phone} = req.body;
    console.log("Recieved data:",req.body)
    if (password == confirmPassword) {
        // return res.status(400).json({ error: "Passwords do not match" });
        // res.send("Passwords do not match")
      

        const signup =  signupModel({
            username: username,
            password: password,
            email: email,
            confirmPassword: confirmPassword,
            phone: phone
        })
        await signup.save()


      }
        else {
            console.log("Passwords do not match")
        }
      
})
export default router;
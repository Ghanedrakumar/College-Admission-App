import express,{Router} from 'express';

import cors from 'cors';

import mongoose from 'mongoose';

import bodyParser from 'body-parser';

import AdmissionModel from '../Models/Admission.js';
const router = express.Router();

router.use (cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.post('/admission', async (req, res) => {
    const { name,fathername,category,address,stream, email, course, branch, dob, phone } = req.body;
console.log(req.body)

const admission = new AdmissionModel({
    name: name,
    fathername: fathername,
    category: category,
    address: address,
    stream: stream,
    email: email,
    course:course,
    branch: branch,
    dob: dob,
    branch: branch,
    phone: phone

})
await admission.save()
.then(() => {
    res.status(200).json({ message: "Admission data saved successfully" });}
)
})
export default router;
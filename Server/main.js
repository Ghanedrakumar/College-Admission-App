import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const app = express();
// const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
import SignupRoutes from './Routes/registration.js';
import AdmissionRoutes from './Routes/Course.js';
import LoginRoutes from './Routes/Biometric.js';
import ContactRoutes from './Routes/contactme.js';
mongoose.connect('mongodb://127.0.0.1:27017/Admission')
  .then(() => console.log("connection is successful"))
  .catch(err => console.log('Failed to connect MongoDb', err))


const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/admission", AdmissionRoutes)
app.use("/signup", SignupRoutes)
app.use("/login", LoginRoutes)
app.use("/contact", ContactRoutes)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
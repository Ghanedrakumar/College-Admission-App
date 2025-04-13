import {Router} from 'express';
import contactModel from '../Models/Contact.js';
const router = Router();
router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    console.log(req.body)
    const contact = new contactModel({
        name:name,
        email:email,
        message:message,
    });
    await contact.save()
}
);
export default router;

import mongoose from "mongoose";
const admissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fathername: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    stream: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }
    })
    const Admission = mongoose.model("Admission", admissionSchema);
    export default Admission;  

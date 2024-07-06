import mongoose from "mongoose";
import validator from "validator";

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    subject: {
        type: String,
        required: true
    }, 
});

export const Teachers = mongoose.model("Teachers", teacherSchema);
import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
       dbName: "SCHOOL_MANAGEMENT_SYSTEM" ,
    })
    .then(() => {
        console.log("Database Connected Successfully");
    })
    .catch((error) => {
        console.log("Database Connection Failed");
    });
};
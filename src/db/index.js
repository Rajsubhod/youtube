import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectionDB = async () => {
    try {
        const con = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log("\n MONGODB connected :", con.connection.host);
    } catch (error) {
        console.error("MONGODB connection error: ", error);
        process.exit(1);
    }
};

export default connectionDB;

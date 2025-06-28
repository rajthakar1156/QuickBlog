import mongoose from "mongoose";


 const connectDB= async ()=>{
    try {
        mongoose.connection.on('connected',()=> console.log("database is connected!"))
        await mongoose.connect(`${process.env.MONGODB_URI}/openbook2`)
    } catch (error) {
        console.log("error in db connection",error.message)
    }
}

export default connectDB;
const mongoose = require('mongoose')//mongoose
const dotenv = require('dotenv');
dotenv.config();

const db = async() => {
    try{
         await mongoose.connect(process.env.MONGO_URL)
        console.log("database connected")
    }
    catch(err){
        console.log("database connecting error",err)
    }
}
module.exports = db
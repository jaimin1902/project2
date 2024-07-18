const mongoose = require("mongoose");

// const URI = `mongodb+srv://jayminprajapati5959:jaimin1902@cluster0.ksy9ll7.mongodb.net/`
const URL = process.env.MONGODB_URI
const connectDB = async () => {
    try {
        await mongoose.connect(URL).then(
            console.log("mongodb connected successful")
        )
    } catch (error) {
        console.log(error)
        process.exit(0);
    }
}


module.exports=connectDB;
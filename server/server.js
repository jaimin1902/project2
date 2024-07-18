const express = require("express");
require("dotenv").config();
const router = require("./router/auth-router");
const connectDB = require("./utils/db");
const app = express();

app.use(express.json());


app.use("/api/auth",router)


const PORT = process.env.PORT;

connectDB().then(()=>{

    app.listen(PORT,()=>{
        console.log(`server is running at port :${PORT}`)
    });
});

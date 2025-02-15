
const express = require("express");
const urlRoutes = require("./routes/route")
const app = express();
const { connectDB } = require("./connect")

require("dotenv").config()
// dotenv.config({
//     path: "./env"
// })

connectDB(process.env.DB_NAME).then(()=>{
    console.log(" Database is connected successfully ");
}).catch(err =>{
    console.log(" DB connection error : ",err);
});

app.use(express.json())
app.use("/url", urlRoutes);
//app.get("/:shortId", redirectUser);

app.listen(process.env.PORT ,()=>{
    console.log(`http://${process.env.HOST_NAME}:${process.env.PORT}`);
})

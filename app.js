const express = require('express')
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express()
dotenv.config();

const userRoutes = require("./routes/user");

const PORT = process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use('/api', userRoutes);

//routes
app.get = ('/', (req,res) => {
    res.send("Welcome to my API");
});

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>{console.log("Connected with MongoDB Atlas");})
    .catch((err) => {
        console.error(err);
    })

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})
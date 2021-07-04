const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/authentification");
dotenv.config();

app.use(express.json());

app.listen(port, () => {
    console.log("started my server");
});


app.get('/', (req, res) => {
    res.send('Hello you!')
  });

/*
app.use("/",(req,res)=>{
    console.log("hey this is a test BLA!")
});
*/

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(console.log("Connected to MongoDB database")).catch((err) => console.log(err));

app.use("/api/authentification",authRoute); 

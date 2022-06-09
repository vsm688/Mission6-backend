const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const callQuickSort = require("./algorithms/quicksort");
app.use(cors())
app.use(express.json())
const connectionString = "mongodb://mongo:27017/property"

// above connection string for local database ^^^ 
// mongodb://localhost:27017
// const connectionString = "mongodb://localhost:27017/property"
const Property = require("./schema/Property");
const Agent = require("./schema/Agent");
mongoose.connect(connectionString, {useNewUrlParser: true}).then(() => console.log("mongodb connected."))
.catch((e) => console.log(e.message))

const db = mongoose.connection;
db.on("error",(error) => console.log(error))
db.once("open", () => console.log("connected"))


app.get("/",(req,res) =>{
    res.status(200).json({})
});


const propertyRouter = require("./routes/Property");
app.use("/properties",propertyRouter);

const agentRouter = require("./routes/Agents");
app.use("/agents",agentRouter);





app.listen(port,() =>{
    console.log("started server")
});
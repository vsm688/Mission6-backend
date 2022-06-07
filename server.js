const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const quicksort = require("./algorithms/quicksort");
app.use(cors())
app.use(express.json())
const connectionString = "mongodb://localhost/property"

// above connection string for local database ^^^ 

// const connectionString = "mongodb://mongo:27017/property"
const Property = require("./schema/Property")
mongoose.connect(connectionString, {useNewUrlParser: true})
.catch((e) => console.log(e.message))

const db = mongoose.connection;
db.on("error",(error) => console.log(error))
db.once("open", () => console.log("connected"))


app.get("/properties", async (req,res) =>{

    let searchParams = req.body.params;
    console.log(searchParams);


    try{
        const properties = await Property.find()
        const sortedProperties = quicksort.quickSort(properties);
        res.status(200).json(sortedProperties);
    }

    catch(error){
        res.status(500).json({message:error.message})
    }
})

app.post("/properties", async (req,res) =>{
    const property = new Property({
        Title: req.body.Title,
        Rooms: req.body.Rooms,
        Suburb: req.body.Suburb,
        Bedrooms: req.body.Bedrooms,
        Bathrooms: req.body.Bathrooms,
        PropertyType: req.body.PropertyType,
        PetsAllowed: req.body.PetsAllowed,
        AvailableNow: req.body.AvailableNow
    })
    try{
        const newProperty = await property.save()
        res.status(201).json(newProperty);
    } 
    catch(error){
        res.status(400).json({message: error.message})
    }
})


app.get("/",(req,res) =>{
    res.status(200).json({})
})



app.listen(port,() =>{
    console.log("started server")
})
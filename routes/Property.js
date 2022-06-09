const express = require("express");
const { append } = require("express/lib/response");
const mongoose = require("mongoose");
const router = express.Router()

const connectionString = "mongodb://localhost/property"
const Property = require("../schema/Property");
const callQuickSort = require("../algorithms/quicksort");
router.get("/", async (req,res) =>{
    try{
        const properties = await Property.find()
        res.status(200).json(properties);
    }

    catch(error){
        res.status(500).json({message:error.message})
    }
})

router.delete("/", async (req,res) =>{
    try{
       const message = Property.deleteMany({}, () =>{console.log("hello")})
       res.status(200).json({})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})


router.post("/sort", async (req,res) =>{
    try{
        console.log("request recieved")
        console.log(req.body.array.searchResults);
        console.log(req.body.number);
        const array = callQuickSort.callQuickSort(req.body.array.searchResults,req.body.number)
        res.status(200).json({theBody: array});
    }

    catch(error){
        res.status(500).json({message:error.message})
    }
})



router.get("/propertycount", async (req,res) =>{
    try{
        const properties = await Property.find()
        res.status(200).json(properties.length);
    }

    catch(error){
        res.status(500).json({message:error.message})
    }
})

router.get("/propertypets", async (req,res) =>{
    try{
        const properties = await Property.find()
        count = 0;
        for (let i = 0; i < properties.length; i++){
            if(properties[i].PetsAllowed === true){
                count ++
            }
        }
        res.status(200).json(count);
    }

    catch(error){
        res.status(500).json({message:error.message})
    }
})

router.post("/", async (req,res) =>{
  
    const property = new Property({
        Title: req.body.Title,
        District: req.body.District ,
        Description: req.body.Description ,
        Suburb: req.body.Suburb ,
        Bedrooms: req.body.Bedrooms,
        Bathrooms: req.body.Bathrooms ,
        Garages: req.body.Garages,
        PropertyType: req.body.PropertyType ,
        PetsAllowed: req.body.PetsAllowed,
        AvailableNow: req.body.AvailableNow,
        ImageCollection: req.body.ImageCollection ,
        RentPrice: req.body.RentPrice, 
        SalePrice: req.body.SalePrice,
        StreetAddress: req.body.StreetAddress
    })
    console.log(property)
    try{
        const newProperty = await property.save()
        res.status(201).json(newProperty);
    } 
    catch(error){
        res.status(400).json({message: "test test" + error.message})
    }
})




module.exports = router;
const mongoose = require("mongoose")


const propertySchema = new mongoose.Schema(
    {
        Title: { type: String, required: true},
        District: { type: String, required: true},
        Description: {type: String, required: true},
        Suburb: { type: String, required: true},
        Bedrooms: {type: Number, required: true},
        Bathrooms:  {type: Number, required: true},
        Garages: {type: Number, required: true},
        PropertyType: { type: String, required: true},
        PetsAllowed: { type: Boolean, required: true },
        AvailableNow: {type: Boolean, required: true },
        ImageCollection: {type: [String], required: true},
        RentPrice: {type: Number},
        SalePrice: {type: Number},
        ListedAt: {
            type: Date,
            immutable: true,
            default: () => Date.now()
        },
        StreetAddress: {type: String, required:true}
    }
)

module.exports = mongoose.model("Property",propertySchema,"Properties")
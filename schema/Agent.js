const mongoose = require("mongoose")
const { findById } = require("./Property")

const AgentSchema = new mongoose.Schema(
    {
        FirstName: { type: String, required: true },
        LastName: { type: String, required: true },
        Phone: {type: String, required: true},
        Email: {type: String, required: true},
        FaceBook : {type: String},
        Linkedin : {type:String},
        Instagram: {type: String}
    }

)

module.exports = mongoose.model("Agent",AgentSchema,"Agents");
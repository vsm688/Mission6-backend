const express = require("express");
const router = express.Router();

router.get("/agents", async (req,res) =>{
    try{
        const agents = await Agent.find()
        res.status(200).json(agents);
    }

    catch(error){
        res.status(500).json({message:error.message})
    }

})

module.exports = router;
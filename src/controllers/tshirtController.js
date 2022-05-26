
const express = require("express");
const router = express.Router();

const Tshirt = require("../models/tshirtModel");

router.post("/tshirt",async(req,res)=>{

    try {
        let tshirt = await Tshirt.create(req.body);
        return res.status(200).send(tshirt)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("/tshirt",async(req,res)=>{

    let page = req.query.page
    try {
        let tshirt = await Tshirt.find().limit(6).skip((page-1)*6).lean().exec();
        return res.status(200).send(tshirt)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.patch("/tshirt/:id",async(req,res)=>{

    try {
        let tshirt = await tshirt.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(tshirt)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/tshirt/:id",async(req,res)=>{

    try {
        let tshirt = await Tshirt.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(tshirt)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

module.exports = router;
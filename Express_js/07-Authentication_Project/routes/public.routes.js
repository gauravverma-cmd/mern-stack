import express from "express"
import { generateToken } from "../utils/token.utils.js"


const router = express.Router()


// route for generate token 

router.get("/generate-token", (req,res)=> {
    const token = generateToken()

    res.status(200).send({
        message : "Token generate please save it for future",
        token : token
    })
})

// route for home page

router.get("/",(req,res)=> {
    res.status(200).send({
        message : "Welcome to Home Page"
    })
})

export default router
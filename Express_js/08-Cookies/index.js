import express from "express"
import cookieParser from "cookie-parser"

const app = express()

app.use(cookieParser("mySecretKey123"))

app.get("/", (req, res) => {
    const cookieOptions = {
        maxAge: 1000 * 60 * 60 * 24, // 24 hours
        httpOnly: true,              
        signed: true                 
    }

    // 1. Set the first signed cookie ("name")
    res.cookie("name", "express", cookieOptions)

    // 2. Set the second signed cookie ("userId")
    // Values are converted to strings when stored as cookies
    res.cookie("userId", "99", cookieOptions)
    
    res.send("Home page - Cookies set successfully!")
})

app.get("/productpage", (req, res) => {
    console.log("Signed Cookies: ", req.signedCookies)
    // Output: { name: 'express', userId: '99' }

    const { name, userId } = req.signedCookies

    // Check both signed cookies
    if (name === "express" && userId === "99") {
        return res.status(200).json({
            id: 1,
            name: "Item-01",
            price: "$200",
            user: userId
        })
    }

    return res.status(403).send("You are not authorized to view this page")
})

app.listen(8080, () => {
    console.log("Server running at http://localhost:8080")
})
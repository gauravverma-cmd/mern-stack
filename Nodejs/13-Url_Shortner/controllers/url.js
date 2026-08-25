const {nanoid} = require("nanoid")
const URL = require('../models/url')
async function handleGenerateNewShortUrl (req,res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({err : "url is required"})
    const shortID = nanoid(8)
   await URL.create({
    shortId : shortID,
    redirectUrl : body.url,
    visitHistory : [],
   })
   return res.json({ Id : shortID})
}

module.exports = {
    handleGenerateNewShortUrl,
}
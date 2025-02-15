const shortid = require("shortid")
const URL = require("../models/data");

const handleGeneratedURL = async (req,res)=>{
    const body = req.body;
    if(!body.url) return res.status(400).json({"ERROR": "URL is required"});
    const shortID = shortid.generate();
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: []
    })

    return res.json({id: shortID})
};

const redirectURL = async (req,res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    });
    
    res.redirect(entry.redirectURL)
};

const analytics = async (req, res) =>{
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length
    })
}

module.exports = {
    handleGeneratedURL,
    redirectURL,
    analytics
}
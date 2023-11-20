const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("inside jwtMiddleware");
    const token = req.headers['authorization'].split(' ')[1]
    try{
        const jwtResponse = jwt.verify(token,"supersecretkey12345")
        console.log(jwtResponse);
        req.payload = jwtResponse.userId
        next()
    }catch(err){
        res.status(401).json("Authorization failed!!! please Login....")
    }
}

module.exports = jwtMiddleware
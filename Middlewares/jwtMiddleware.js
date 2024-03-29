const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    // console.log("Inside jwt middleware");

    try{
        const token = req.headers['authorization'].split(" ")[1]
        // console.log(token);
        if(token){
            const jwtResponse = jwt.verify(token,process.env.jwt_secret)
            req.payload = jwtResponse.userId
            // console.log(jwtResponse.userId);
            next()
        }
        else{
            res.status(401).json("Please Provide token")
        }
    }catch{
        res.status(403).json("Please Login")
    }
}

module.exports = jwtMiddleware
import jwt from "jsonwebtoken";


//middleware

const authenticateToken = (req,res,next )=> {
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message: 'no token provided'});
        }
         const decoded = jwt.verify(token,process.env.JWT_SECRET);


         if(!decoded){
            return
                res.status(401).json({
    message:"invalid token",
    sucess:false
                });




         }
      req.id = decoded.userId;
      next();
     }
     catch (error){
        return res.status(401).json({message: ' invalid token provided'});
        }
    
};

export default authenticateToken;
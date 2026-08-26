import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
 // import { use } from "react";

// login n register 
export const register = async (req, res) => {  // tala vako kunai empty xa ki xaina hereko
    try{
        const {fullname,email, phoneNumber,  password,role} = req.body;
       
        if(!fullname||!email || !phoneNumber ||!password ||!role){
            return res.status(404).json({
                message: "Missing required fields",
                success: false,
            });
        }
      
        const user = await User.findOne({email}); //duplicate email xa ki nai check haneko 
       if(user){
      return res.status(404).json({
                message: " email already exists",
                success: false,
            });

    } 

    //convert paasword to paassword to hashes
    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = new User({
        fullname,
        email,
        phoneNumber,
        password: hashedPassword,
        role,
    });

    await newUser.save();

return res.status(200).json({
     message:`account crested sucessfully ${fullname}`,
     success: true,

});
}
catch (error) {
    console.log(error);
    res.status(500).json({
                message: "server error registering user ",
                success: false,
            });

}
};

export const login = async (req, res) => {
try {
 const {email,password,role} =req.body;

        if(!email  ||!password ||!role ){
            return res.status(404).json({
                message: "Missing required fields",
                success: false,
            });

} 
 //checking email jun login garxa tyo db ma xa ki xaina 
 let user = await User.findOne({email});
 if(!user){
            return res.status(404).json({
                message: "incoorect email or password",
                success: false,
            });
}  
//checking password 
let isMatch = await bcrypt.compare(password,user.password);
if(!isMatch){
    return res.status(404).json({
    message: "incorrect passsword and email",
    success:false,

    });
}

// check role correctly or not 
if(user.role !== role){
    return res.status(403).json({
    message: "you don't have the necessary role to acess this esources",
    success:false,

    });

}

//  generating the token 
const tokenDate = {
    userId: user._id,

};
const token =  jwt.sign(tokenDate,process.env.JWT_SECRET,{ expiresIn: "1d"});

user ={
    _id:user.id,
    fullname:user.fullname,
    email:user.email,
    phoneNumber:user.phoneNumber,
    role:user.role,
    profile:user.profile
}



// token saving in cookies
 return res
 .status(200)
 .cookie("token",token,{maxAge : 1* 24* 60 *60 *1000,
    httpOnly: true,
    sameSite: "Strict",
 })
.json({
  message: `welcomee back ${user.fullname}`, user,
   success:true,
});


}
catch (error) {   
console.log(error);
    res.status(500).json({
                message: "server error in login failed",
                success: false,
            });

}
};

// logout ko


export const logout =( req , res) => {
    try{
        return res.status(200).cookie("token", "",{maxAge: 0}).json({
            message : "logged out sucessfully ",
            success:true,

        });
    }
catch(error){
    console.error(error);
    res.status(500).json({
                message: "server error logout ",
                success: false,
            });

}

};


//updating the profile 

export const updateProfile = async (req,res) => {
    try {
        const {fullname, email, phoneNumber, bio, skills}= req.body;
        const file =req.files;
       
             
              

//cloudinary update 







 //skill string format ma xa teslao array ma lagne 
 let skillsArray ;

if (skills){
     skillsArray = skills.split(',');

}
  
 const userId = req.id; //middleware authentications
 let user = await User.findById (userId);

 if(!user){
 return res.status(404).json({
                message: "user not found",
                success: false,
            });
 }



//update database profile
if(fullname){
                user.fullname = fullname;
              }

              if(email){
                user.email = email;
              }
             
              if(phoneNumber){
                user.phoneNumber = phoneNumber;
              }

              if(bio){
                user.profile.bio = bio;
              }

              if(skills){
                user.profile.skills = skillsArray;
              }









// resume
await user.save();


user ={
    _id:user.id,
    fullname:user.fullname,
    email:user.email,
    phoneNumber:user.phoneNumber,
    role:user.role,
    profile:user.profile
};


return res.status(200).json({
    message:"profile updated sucessfully ",
    user,
    success:true,
});


    }
catch(error){
     console.error(error);
    res.status(500).json({
                message: "server error updating profile ",
                success: false,
            });

}

};


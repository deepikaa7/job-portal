import mongoose from "mongoose";
const userSchema = new  mongoose.Schema({
    fullname:{
     type:String,
     required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    phoneNumber:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    role:{
        type:String,
        enum:['Student','Recruiter'],
        default:'Student',
         required:true
    },

    profile:{
        bio:{
            type:String
        },
        skills:[{
            type:String
        }],
        resume:{
            type:String //url to resume from database 
        },
        resumeOriginal:{ //file kun type ko ho pdf ki k
        type:String //original name of resume
        },
        
        company:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Company",
        },
       
        profilePhoto:{
            type:String , //url to profile photo
            default :"",
        },



    },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
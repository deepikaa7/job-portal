
import Job from "../models/job.model.js";
export const postJob = async (req, res) => {

    try {
        const { title, description, requirement, salary, location, jobType, position, companyID, experience } = req.body;
        const userId = req.id;
        if (!title || !description || !requirement || !salary || !companyID || !experience || !jobType || !position || !location) {
            return res.status(400).json({ message: "please fill all the fields", status: false });

        }

    const job =  await Job.create({
    title,
    description,
     requirement :requirement.split(","),
    salary: Number (salary),
    location,
    jobType,
    position,
     company :companyID,
    experience,
   created_by : userId

    });
 return res .status(201) .json({message:"job posted sucessfully " , status:true, job});

    } catch (error) {
  console.error(error);
    res.status(500).json({
                message: "server error ",
                success: false,
            });
    }
};




// admin posting all the jobs
export const getAllJobs = async (req, res) => {

try{

    //filter garne db lai 
    const keyword =req.query.keyword || "";
    const query = {
        $or: [
            {title: {$regex: keyword, $options: "i"}},
             {description: {$regex: keyword, $options: "i"}},
            
        ],
    };
 //yeta .populate lekheko ki job wala ma post get garda created by ani company ko puri info auxa ani
   const jobs = await Job.find(query)
    .populate("company")
    .populate("created_by")
    .sort({ createdAt: -1 });

    if(!jobs){
        return res.status(404).json({message: "no jobs found ", status: false});
    }
     return res.status(200).json({jobs,status:true});


}catch(error){
console.error(error);
    res.status(500).json({
                message: "server error ",
                success: false,
            });

}

};


//user ko lagi 
export const getJobById = async(req,res) => {
    try{
  const JobId = req.params.id;
  
   const job = await Job.findById(JobId)
    .populate("company")
    .populate("created_by");

     if(!job){
        return res.status(404).json({message: "job not  found ", status: false});
    }
     return res.status(200).json({job ,status:true});


    } catch(error){
        console.error(error);
    res.status(500).json({
                message: "job not found..",
                success: false,
            });
    }
};


//admin  job created ko lagi 
export const getAdminJob = async(req,res) => {
try{

    const adminId =req.id;
    const jobs = await Job.find({created_by : adminId});
    if(!jobs){
        return res.status(404).json({message: "job not  found ", status: false});
    }
     return res.status(200).json({jobs ,status:true});


} catch(error){
   console.error(error);
    res.status(500).json({
                message: "job not created ..",
                success: false,
            }); 
}

};
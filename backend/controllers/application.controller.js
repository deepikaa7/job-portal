import { Application } from "../models/application.model.js";
import Job from "../models/job.model.js";


// Apply for a job
export const applyJob = async (req, res) => {
    try {

        const userId = req.id;
        const jobId = req.params.id;

        // Check job ID
        if (!jobId) {
            return res.status(400).json({
                message: "Invalid job id",
                success: false
            });
        }

        // Check if job exists
        const job = await Job.findById(jobId);

        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            });
        }

        

        // Create application
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        });

        // Add application to job
        if (!job.application) {
    job.application = [];
}
       job.application.push(newApplication._id);
        await job.save();

        return res.status(201).json({
            message: "Job applied successfully",
            success: true,
            application: newApplication
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};


// Get jobs applied by user
export const getAppliedJobs = async (req, res) => {
    try {

        const userId = req.id;

        const applications = await Application.find({
            applicant: userId
        })
        .sort({ createdAt: -1 })
        .populate({
            path: "job",
            populate: {
                path: "company"
            }
        });

        if (applications.length === 0) {
            return res.status(404).json({
                message: "No application found",
                success: false
            });
        }

        return res.status(200).json({
            applications,
            success: true
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};


// Admin gets applicants
export const getApplicants = async (req, res) => {
    try {

        const jobId = req.params.id;

        const job = await Job.findById(jobId)
            .populate({
                path: "application",
                populate: {
                    path: "applicant"
                }
            });

        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            });
        }

        return res.status(200).json({
            job,
            success: true
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};


// Update application status
export const updateStatus = async (req, res) => {
    try {

        const { status, id: applicationId } = req.params;

        if (!status) {
            return res.status(400).json({
                message: "Invalid status",
                success: false
            });
        }

        const application = await Application.findById(applicationId);

        if (!application) {
            return res.status(404).json({
                message: "Application not found",
                success: false
            });
        }

        application.status = status.toLowerCase();

        await application.save();

        return res.status(200).json({
            message: "Application status updated",
            success: true
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};
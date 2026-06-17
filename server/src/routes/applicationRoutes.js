// Express routes for /api/applications - to be implemented
import { Router } from "express";
import Job from "../models/Application.js";


const applicationRoutes = Router();
applicationRoutes
.route("/")
.post(async (req, res, next)=> {
    try{
        let result = await Job.create(req.body);

        res.json({
            success: true,
            message: "Successfull",
            result: result
        })
    }
    catch(error){   
        
        res.json({
            success: false,
            error: error.message
        })
    }
})
.get(async (req, res, next)=> {
    try{
        let result = await Job.find({});

        res.json({
            success: true,
            message: "Retrived",
            result: result
        })
    }
    catch(error){   
        
        res.json({
            success: false,
            error: error.message
        })
    }
})


applicationRoutes
.route("/:id")
.get(async (req, res, next)=> {
    try{
        let result = await Job.findById(req.params.id);

        res.json({
            success: true,
            message: "Success",
            result: result
        })
    }
    catch(error){   
        
        res.json({
            success: false,
            error: error.message
        })
    }
})
.patch(async (req, res, next)=> {
    try{
        let result = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.json({
            success: true,
            message: "successsss",
            result: result
        })
    }
    catch(error){   
        
        res.json({
            success: false,
            error: error.message
        })
    }
})
.delete(async (req, res, next)=> {
    try{
        let result = await Job.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "sucessfully del vayo",
            result: result
        })
    }
    catch(error){   
        
        res.json({
            success: false,
            error: error.message
        })
    }
})

export default applicationRoutes
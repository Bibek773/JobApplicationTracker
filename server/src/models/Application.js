import {Schema, model} from 'mongoose';
let applicationSchema = Schema({
    companyName: {
        type : String,
        required :[true, "Company name is required"],
        trim : true,
        minLength : [2, "Company name must be at least 2 characters long"]
    },
    jobTitle: {
        type: String,
        required :[true, "descriptionn is required"],
    },
    jobType: {
        type : String,
        enum : ["Internship", "Full-time", "Part-time"],
        required :[true, "job type is required"]
    },

    status: {
        type : String,
        enum : ["Applied", "Interviewing", "Offer", "Rejected"],
        required : [true, "Status is required"]
    },
    appliedDate: {
        type : Date,
        required :[true, "Applied date is required"]
    },
    notes: {
        type : String,
        trim: true, 
        default: "",
    },
},
{ 
        timestamps: true
    })

const Job = model("Job", applicationSchema);
export default Job;
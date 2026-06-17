import {Schema, model} from 'mongoose';
let Application = Schema({
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
        enum : ["Applied", "Interviewing", "offer", "rejected"],
        required : true
    },
    appliedDate: {
        type : Date,
        required :[true, "Applied date is required"]
    },
    notes: {
        type : String,
    },
    createdAt: {
        type : Date,
        default : Date.now
    },
    updatedAt: {
        type : Date,
        default : Date.now
    }

})

let Job= model("job", Application)
export default Job
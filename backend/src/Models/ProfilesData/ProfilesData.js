import mongoose, { Schema } from "mongoose";

const DataSchema = new Schema({

    aadhar:{
        type:[]
    },
    pan:{
        type:[]
    },
    birthCertificate:{
        type:[]
    },
    otherDocuments:{
        type:[]
    }

});


const ProfilesDataSchema = new Schema({
   
    userId:{
        type:mongoose.Schema.ObjectId,
        index:true//relation with whosoever is making profiles..
    },
    profileData:{
        type:[DataSchema]
    },
    name:String,
    age:Number,
    dob:Date,

});


export const ProfileSchema = new mongoose.model('Profiles',ProfilesDataSchema);
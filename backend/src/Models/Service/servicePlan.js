import mongoose from "mongoose";

const servicePlanSchema= new mongoose.Schema({

    serviceName:{
        type:String,
        required:[true,"serviceName is required"]
    },
    serviceType:{
        type:mongoose.Types.ObjectId,
        ref:"service",
        required:[true,"service type is required"]
    },
    serviceProviderName:{
        type:mongoose.Types.ObjectId,
        ref:"serviceProvider",
        required:[true,"ServiceProviderName is required"]
    },
    mainPoints:{              // like Room rent upto 1.5% of SI
        type:[String]
    },
    coverAmount:{
        type:String,
        required:[true,"cover is required"]
    },
    claimSettlementRatio:{
        type:String,
        required:[true,"claimSettlementRatio is required"]
    },
    includes:{
        type:[String]
    },
    excludes:{
        type:[String]
    },
    cashlessHospitals:{
        type:[String]
    },
    claimProcess:{
        type:String
    },
    basePremiumPerMonth:{
        type:Number
    }

},{timestamps:true})

export default mongoose.model("servicePlan",servicePlanSchema)
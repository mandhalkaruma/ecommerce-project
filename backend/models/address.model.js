import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
},{timestamps:true});

const Address = mongoose.model("addresses", addressSchema);
export default Address;
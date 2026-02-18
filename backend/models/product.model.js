import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    quantity:{
        type:Number,
        default:0
    },
    color:{
        type:String
    },
    sizes:[{
        name:{type:String},
        quantity:{type:Number, default:0}
    }],
    imageUrl:{
        type:String
    },
    category:{
        type:String,
        required:true
    }
},{timestamps:true});

const Product = mongoose.model('Product', productSchema);
export default Product
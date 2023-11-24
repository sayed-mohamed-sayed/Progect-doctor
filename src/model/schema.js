import mongoose from "mongoose";


const mongooseSchema=new mongoose.Schema({
  name:String ,
   phone:String ,
   age:String ,
   receve:String ,
   fast:String,
   data:{
    type:Date ,
    default:Date.now
   }
})
module.exports=mongoose.models.Doctor || mongoose.model("Doctor" ,mongooseSchema)
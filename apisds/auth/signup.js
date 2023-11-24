import connectdb from "@/pages/utls/connect";
import User from "../../../../model/schema"
import { hash } from "bcryptjs";



export default async function handelr() {
    connectdb()
    if (req.method==="POST") {
        const {name ,email ,password}=req.body
const checkexicting=await User.findOne({email})
User.create=({name ,email,password :await hash(password ,12)} ,function(err,data){
    if (err) return res.status(404).json({err})
    res.status(201).json({status:true ,user:data})
})

    }
}
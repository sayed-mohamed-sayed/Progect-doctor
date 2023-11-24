import connect from "../../../lib/mongoodb";
import User from "../../../lib/model/schema"
connect()

export default async function handelr(req,res) {
    
const {email,password}=req.body
const user=await User.findOne({email,password})
if (!user) {
    return res.json({status:"lllllllllllllllll"})
}else{
    res.redirect("/home")
}

}
import connect from "../../../lib/mongoodb";
import User from "../../../lib/model/schema"
connect()

export default async function handelr(req,res) {
    

    try {
        const user= await User.create(req.body)
        res.redirect("/")
if (!user) {
    return res.json({"code":"user not found"})
}

    } catch (error) {
        console.log(error);
        res.status(400).json({status:"not ///////////"})
    }
}
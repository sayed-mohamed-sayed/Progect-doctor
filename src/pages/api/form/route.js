import user from "../../../model/schema"
import Contact from "../../../Connect/connect"

Contact()
export default async function handler (req ,res){

    if (req.method==="GET") {
        
     try {
        const notes =await user.find()
        res.send(notes)
     } catch (error) {
        res.status(400).json({ success: false });

     }
    }
    else if(req.method ==="POST"){
const {name ,phone ,age ,receve ,fast}=req.body
try {
    const newreceve= new user ({name ,phone ,age ,receve ,fast })
    await newreceve.save()
    res.status(201).json({ success: true, message: "Data saved successfully" });

} catch (error) {
    res.status(400).json({ success: false, message: "Failed to save data" });
  
}
    }
}
import formidable from "formidable"

export const config={
    api:{
        bodyParser:false,
    },
}

export default async function handelr(req ,res){
const form =new formidable.IncomingForm()
form.parse(req ,(err ,fields ,files)=>{
    if (err) {
        console.log(err);
        res.status(500).send("err ")
    }else{
        const file=files.file
        const filename=file.name
const filepath=file.filepath

file.pipe(fs.createWriteStream(`public/${filename}`))
res.status(200).json({path:`/public/${filename}`})
    }
})

}
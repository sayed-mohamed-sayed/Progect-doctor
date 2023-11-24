import { useState } from "react";
import style from "../../../styles/form.module.css";

export default function Postcreate() {

    const [image,setimage]=useState(null)
    const [imageinput,setimageinput]=useState(null)
    const [title,settitle]=useState(null)
    const [desc,setdesc]=useState(null)


    const handelimage=(e)=>{
const file =e.target.files[0]
setimageinput(file)
const fileReader=new FileReader()
fileReader.onload=function (e) {
    console.log(e.target.result);
    setimage(e.target.result)
}

fileReader.readAsDataURL(file)
}

const handel=async ()=>{

const formdata=new FormData()
formdata.append("file" ,imageinput)

const res=await fetch('/api/form',
{
  method:'POST',
  body:formdata,

})
if (res.ok) {
  const result=await res.json()
  console.log(result);
}else{
  console.log("error");
}

}

const handelformdata=(e)=>{
e.preventDefault()
const form=new FormData()
form.append('title',title)
form.append('desc',desc)
form.append('image' ,imageinput)

}

function addpost() {
  
  const post ={
    title ,
    desc ,
    image
  }
  console.log(post);
}
  return (
    <div className={style.mn}>
        <form onSubmit={handelformdata}>


      <input
        type="text"
        placeholder="Entertitle"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />{" "}
      <textarea
        type="text"
        placeholder="Enter text"
        value={desc}
        onChange={(e) => setdesc(e.target.value)}
      />{" "}
      <input
        type="file"
        // value={name}
        onChange={handelimage}
      />
      <button onClick={handel}>oooooooooo</button>
      <div>

        <img src={image} style={{width:"100px"}}/>
      </div>
      <button onClick={addpost}>click</button>
        </form>
    </div>
  );
}

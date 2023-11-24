// @flow strict


export const metadata = {
    title: 'progect-recive',
    description: 'Generated by create next app progect Doctor pation',
  }
  

// import {AiOutlineLeftCircle,AiOutlineFrown ,AiFillEnvironment,AiFillPhone} from "react-icons/ai"
// import {mdMdOutlineSick} from "react-icons/"
"use client"
import { useState } from "react";
import HeaderD, { HeaderO } from "../header/page";
import Footer from "../footer/page";

export default  function Appoints() {

    const [message, setMessage] = useState("");
    const [name ,setname]=useState("")
    const [phone ,setphone]=useState("")
    const [date ,setdate]=useState("")
    const [receve ,setfast]=useState("")
    const [fast ,settype]=useState("")
    
    const data= new Date()
    const io=data.getFullYear()
    const kl=io-date

    const handelr=async (e)=>{
e.preventDefault()
try {
    const datas={
        name ,
        phone ,
        age:kl,
        receve ,
        fast,
    }
    
    const res=await fetch('http://localhost:3000/api/form/route',
    {
      method:'POST',
      body:JSON.stringify(datas),
    headers:{
        "Content-Type":"application/json"
    }

    })
    const data = await res.json();
    setMessage(data.message);

} catch (error) {
    console.log(error);
}

       
        }
  
console.log(message);
return (
<>
<div className='w-[100%]   text-center  mt-12 '>
    
   
<div className="flex  flex-warb   ">
<div className="w-[60%] bg-[#1e272e] text-white h-[50px] absolute top-0">
<HeaderD />

</div>
<div className="w-[40%] h-[50px] bg-[#1e272e]  absolute top-0 right-0">
<HeaderO />

</div>

</div>


<div className="flex justify-center items-center text-center w-[100%] m-auto ">
    <div className="w-[300px] h-[300px] ">
        <img src="./444.png" alt="" />
    </div>
    <div className="w-[60%]">
        <form>
            <div className="w-[80%] border border-solid border-black m-2">
            <input className="w-[100%]  pl-4 border-none" type="text" onChange={(e)=>setname(e.target.value)}  name="name" placeholder='Enter Name ' id="" />
            </div>
            <div className="w-[80%] border border-solid border-black m-2">
            <input className="w-[100%] pl-4 border-none" type="tel" onChange={(e)=>setphone(e.target.value)}   name="phone"  placeholder='Enter Phone ' id="" />
            </div>
            <div className="w-[80%] border border-solid border-black m-2">
Enter Prithday:_
            <input type="number" maxLength={4} name="age"  id=""  onChange={(e)=>setdate(e.target.value)}/>
            </div>
<div className="  ">
          <div className="border border-solid border-black m-2 w-[80%]">
          <label  htmlFor="choise">Reserve Type  :</label>
<select name="receve" className="w-[80%] " id="e" onChange={(e)=>setfast(e.target.value)}>
<option value="option receve">Enter option receve </option>
<option value="low">lowe </option>
<option value="fast">fast </option>
</select>
          </div>
          <div className="border border-solid border-black m-2 w-[80%]">
          <label  htmlFor="choise">Reserve Type  :</label>
<select name="fast" className="w-[80%] " id="e" onChange={(e)=>settype(e.target.value)}>
<option value="option pation">Enter option receve </option>
<option value="usuall">usuall </option>
<option value="revison">revison </option>
</select>
          </div>
    </div>       
    <div className="border border-solid border-black m-2 w-[80%] hover:bg-[#6195ff] hover:text-white hover:font-bold">

        <button onClick={handelr} className="w-[100%]">Abboint Now </button>
    </div>
        <div className="text-[#6195ff] text-start ">{message}</div>

        </form> 
    </div>
</div>
{/* <Datainformation/> */}

</div>
<Footer/>
</>
);
};

 
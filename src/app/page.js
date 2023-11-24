// "use client";
// import Image from "next/image";
// import { firebaseConfig, firebaseStorgeUrl } from "@/utls";
// import { initializeApp } from "firebase/app";
// import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
// import { resolve } from "styled-jsx/css";

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app, firebaseStorgeUrl);

// const createuniquefilename = (getfile) => {
//   const timestamp = Date.now();
//   const rendomstringvalue = Math.random().toString(36).substring(2, 12);

//   return `${getfile.name}.${timestamp}.${rendomstringvalue}`;
// };

// async function helperforuploadimagetofirebase(file) {
//   const getfilename = createuniquefilename(file);
//   const storagerefrence=ref(storage ,`eccromance/${getfilename}`)

// const uploadimage=uploadBytesResumable(storagerefrence ,file)
// return new Promise((resolve ,reject)=>{
// uploadimage.on("state_changed" ,(snapshot)=>{},
// (error)=>{
//   console.log(error);
//   reject(error)
// },()=>{
//   getDownloadURL(uploadimage.snapshot.ref)
//   .then((downloadUrl)=>resolve(downloadUrl))
//   .catch((error)=>reject(error))
// }


// )

// })

// }

// export default function Home() {
//   async function handelimage(event) {
//     console.log(event.target.files);
//     const extractimageurl = await helperforuploadimagetofirebase(
//       event.target.files[0]
//     );
//     console.log(extractimageurl);
//   }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1>E commerce Wepsite</h1>

//       <input type="file" onChange={handelimage} />
//     </main>
//   );




// @flow strict


export const metadata = {
    title: 'Progect-Home',
    description: 'Generated by create next app progect Doctor pation',
  }
  
import * as React from 'react';
import HeaderD, { HeaderO } from '../app/header/page';
import Hom from '.././app/hom/page';
import Show from '../app/show/page';
import Footer from '../app/footer/page';
function HomeD() {
return (
<div className='w-[100%] h-auto relative'>

<div className="flex flex-warb h-[80px] ">
<div className="w-[60%] h-[560px] bg-white absolute top-0">
<HeaderD />

</div>
<div className="w-[40%] h-[560px] bg-[#1e272e] absolute top-0 right-0">
<HeaderO />

</div>

</div>
<div className="h-[450px]">
<Show/>

</div>
<div className="">
<Hom />

</div>
<Footer/>
</div>
);
};

export default HomeD;
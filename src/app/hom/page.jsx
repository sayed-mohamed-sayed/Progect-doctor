// @flow strict


import * as React from 'react';
import Image from 'next/image';
// import {AiOutlineLeftCircle ,AiFillEnvironment,AiFillPhone} from "react-icons/ai"

function Hom() {
    return (
        <div className='flex items-center z-20 w-[100%] relative justify-center flex-wrap '>
        <div className='flex items-center bg-[#6195ff] text-white p-2 m-2 w-[200px] md:w-[250px]  lg:w-[300px]' >
        <Image  src="/date.png" className='text-[30px] pr-2 font-black' width={50} height={50} alt='No image'/>
            <div className="">
                <p className='font-medium'>opening Hours</p>
                <p className='w-[150px] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
        </div>
        <div className='flex items-center bg-[#1e272e] text-white p-2 m-2 w-[200px] md:w-[250px]  lg:w-[300px]'>
        <Image  src="/location.png" className='text-[30px] pr-2 font-black' width={50} height={50} alt='No image'/>
            <div className="">
                <p className='font-medium'>Visit our location</p>
                <p className='w-[150px] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
        </div>
        <div className='flex items-center bg-[#6195ff] text-white p-2 m-2 w-[200px] md:w-[250px]  lg:w-[300px]'>
        <Image  src="/contact.png" className='text-[30px] pr-2 font-black' width={50} height={50} alt='No image'/>

            <div className="">
                <p className='font-medium'>Contast us now</p>
                <p className='w-[150px] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
        </div>
        </div>
    );
};

export default Hom;
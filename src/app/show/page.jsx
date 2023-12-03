// @flow strict


import Image from 'next/image';
import * as React from 'react';
function Show() {
    return (

            <div className="flex flex-warb  ">
                
              
            <div className="flex z-20 relative w-[100%] justify-start  
            p-4 sm:ml-12 md:justify-around text-start mb-12 flex-wrap">
                <div className="mb-2 basis-[40%]">
                    <h1 className='font-black text-xl'>Your New Smile </h1>
                    <h2 className='font-black text-xl'>Start Here</h2>
                    <p className='text-xs font-bold w-[220px] sm:w-[250]'>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Tenetur alias blanditiis
                        numquam officiis accusantium.</p>

                    <button className='bg-[#6195ff] font-bold p-1 text-white rounded mt-4'>Get AppointMent</button>
                </div>
                <div className="basis-[80%] md:basis-[60%] h-[250px] relative">
                    <Image className=' border border-solid border-[#0000002e] mr-2 h-[250px] w-[420px] ' src="/663.jpg" alt="image noy found" width={400} height={250} />
                </div>
            </div>
            </div>
            
    );
};

export default Show;
// @flow strict

import * as React from 'react';
import Image from 'next/image';
function Footer() {
return (
<>
<div className='w-[100%] bg-[#00000024]   text-start  md:m-[0px]  md:mt-4 flex justify-start md:justify-around flex-wrap relative bottom-0'>
<div className="text-[#00000087] m-4 md:m-[0px]">
    <h1 className='text-[#6195ff] mb-4 font-bold '>Services</h1>
    <p>Emergency Dental care</p>
    <p>check up</p>
<p>    Treatment of personal Siseases 
</p>
<p>tooth Extraction</p>
<p>check up</p>
</div>
<div className="text-[#00000087] m-4 md:m-[0px]">
    <h1 className='text-[#6195ff] mb-4 font-bold '>oral Health</h1>
    <p>Emergency Dental care</p>
    <p>check up</p>
<p>    Treatment of personal Siseases 
</p>
<p>tooth Extraction</p>
<p>check up</p>
</div>
<div className="text-[#00000087] m-4 md:m-[0px]">
    <h1 className='text-[#6195ff] mb-4 font-bold '>our Adress </h1>
    <p>cairo-089</p>
    <div className="flex text-[20px] text-[#6195ff]">
    <Image src="/facebok.png" width={25} height={25} className='flex cursor-pointer justify-center m-auto text-[60px] text-[#6195ff] ' alt='No image'></Image>
    <Image src="/whatsapp.png" width={25} height={25} className='flex cursor-pointer justify-center m-auto text-[60px] text-[#6195ff] ' alt='No image'></Image>
    <Image src="/twiter.png" width={25} height={25} className='flex justify-center cursor-pointer m-auto text-[60px] text-[#6195ff] ' alt='No image'></Image>
        {/* <i className='cursor-pointer'><AiFillFacebook/></i>
        <i className='cursor-pointer'><AiFillGoogleCircle/></i>
        <i className='cursor-pointer'><AiFillGoogleCircle/></i> */}
    </div>
<p>call now</p>
<p className='text-white bg-[#6195ff] w-[120px] text-center'>0102561364</p>
</div>
    </div>
    <div className="text-[#00000087] font-bold text-center bg-[#00000036] pt-[20px] text-[13px] relative bottom-0">
        <p>copy right 2023 AllRights Rasarved</p>
    </div>
</>
);
};

export default Footer;
// @flow strict

import Link from 'next/link';
import * as React from 'react';
function HeaderD() {
    return (
        <div>
<nav>

    <div >
<ul className="flex mt-2 justify-center sm:justify-center md:justify-end w-[100%] text-sm sm:text-lg font-medium sm:font-bold absolute z-10">
        
    <li className='ml-2 sm:ml-6  cursor-pointer'><Link href="/">Home </Link></li>
       


    <li className='ml-2 sm:ml-6 cursor-pointer'><Link href="receve">Appointment</Link></li>

   
    
    <li className='ml-2 sm:ml-6 cursor-pointer'><Link href="/services">Service </Link></li>
   
   
    <li className='ml-2 sm:ml-6 mr-2 cursor-pointer'><Link href="/appoint">About</Link></li>
   
</ul>
    </div>
    </nav>
    </div>
    );
};

export default HeaderD;

export function HeaderO() {
    return (
        <div>
<nav>

    <div >
<ul className="flex mt-2 justify-start sm:justify-start md:justify-start w-[100%] text-sm sm:text-lg font-medium sm:font-bold text-white  absolute z-10">


    <li className='ml-6   cursor-pointer'><Link href="blog">Review</Link></li>

   

    <li className='ml-6   cursor-pointer'> <Link href="contact">Contact Us</Link></li>
    
</ul>
    </div>
    </nav>
    </div>
    );
};


// @flow strict

import Link from 'next/link';
import * as React from 'react';
function HeaderD() {
    return (
        <div>
<nav>

<ul>
    <div className="flex mt-2 justify-center sm:justify-center md:justify-end w-[100%] text-sm sm:text-lg font-medium sm:font-bold absolute z-10">
        <Link href="/">
    <li className='ml-2 sm:ml-6  cursor-pointer'>Home</li>
        </Link>
<Link href="receve">

    <li className='ml-2 sm:ml-6 cursor-pointer'>Appointment</li>
</Link>
   
    <Link href="/services">
    <li className='ml-2 sm:ml-6 cursor-pointer'>Service</li>
    </Link>
   <Link href="/appoint">
    <li className='ml-2 sm:ml-6 mr-2 cursor-pointer'>About</li>
   </Link>
    </div>
</ul>
    </nav>
    </div>
    );
};

export default HeaderD;

export function HeaderO() {
    return (
        <div>
<nav>

<ul>
    <div className="flex mt-2 justify-start sm:justify-start md:justify-start w-[100%] text-sm sm:text-lg font-medium sm:font-bold text-white  absolute z-10">
<Link href="blog">

    <li className='ml-6   cursor-pointer'>Review</li>
</Link>
    <Link href="contact">

    <li className='ml-6   cursor-pointer'>Contact Us</li>
    </Link>
    </div>
</ul>
    </nav>
    </div>
    );
};


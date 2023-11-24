import { Fragment } from "react";

const isAdminView=false;
const isauthuser=false;

const user={
    role:'admin'
}

function NavItem() {
    return(
        <div className="items-centerm">

        </div>
    )
}


export default function Navbar(){
    return(
<>
<nav className="bg-white fixed w-full top-0 z-20 border-b border-gray-200">
<div className="max-w-screen-xl flex flex-warp justify-between mx-auto p-4">
    <div className="flex justify-around item-center cursor-pointer w-full"> 
    <span className="slef-center text-2xl font-semibold whitespace-nowrap">
    </span>
    <div className=" flex  md:order-2 gap-2">
    {
        !isAdminView &&isauthuser?
<Fragment>
<button>Account  </button>
<button>cart </button>
</Fragment>:null

    }
    {
        user?.role==='admin'?
isAdminView?(<button>clientview</button>):(
    <button></button>
)
         :null
    }
    {
        isauthuser?<button></button> :<button></button>
    }
    </div>
    </div>
</div>
</nav>
</>    )
}
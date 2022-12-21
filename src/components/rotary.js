import React from "react";
import { Link } from "react-router-dom";

import slider1 from '../images/rotray1.jpg'
import slider2 from '../images/rotray2.jpg'
import slider3 from '../images/rotray3.jpg'
import SideNavBar from "./sidenav";




function Rotary() {
  return (

    <div className="flex w-[100%] h-screen ">
      <div className=" w-[20%]  relative ">
        <SideNavBar />
      </div>
      <div className='relative overflow-auto'>
        <div className='w-100 text-center mx-auto'>
          <h3>ROTARY UNION & JOINTS</h3>
        </div>
        <div className='h-[80%] py-4 flex flex-wrap overflow-auto  '>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider1} alt="./images/locket1.jpg">

              </img>
                <h5 className='py-6'>ROTARY UNION & JOINTS </h5>
              </div>
              <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto ">
                <p>Suitable for RCVD Equipment a rotary union or rotating union, permits the flow of various media from a supply pipe in to and/or outof rotating equipment. </p>
                <Link to='/rotary1'>Read more    </Link>

              </div>
            </div>
          </div>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider2} alt="./images/locket1.jpg">

              </img>
                <h5 className="py-6">ROTARY UNION & JOINTS </h5>
              </div>
              <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto ">
                <p>Suitable for RCVD Equipment a rotary union or rotating union, permits the flow of various media from a supply pipe in to and/or out of rotating equipment.</p>
                <Link to='/rotary2'>Read more    </Link>

              </div>
            </div>
          </div>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider3} alt="./images/locket1.jpg">

              </img>
                <h5 className='py-6'>ROTARY UNION & JOINTS </h5>
              </div>
              <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto ">
                <p>Suitable for RCVD Equipment a rotary union or rotating union, permits the flow of various media from a supply pipe in to and/or out of rotating equipment... </p>
                <Link to='/rotary3'>Read more    </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Rotary;
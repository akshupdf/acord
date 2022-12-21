import React from "react";
import slider1 from '../images/bellow1.jpg'
import slider2 from '../images/bellow2.jpg'
import slider3 from '../images/bellow3.jpg'
import slider4 from '../images/bellow4.jpeg'
import SideNavBar from "./sidenav";

import { Link } from 'react-router-dom'


function Bellow() {
  return (
    <div className="flex w-[100%] h-screen ">
      <div className=" w-[20%]  relative ">
        <SideNavBar />
      </div>
      <div className='relative overflow-auto'>
        <div className='w-80 text-center mx-auto'>
          <h3>BELLOW SEALS</h3>
        </div>
        <div className='h-[80%] py-4 flex flex-wrap overflow-auto  '>

          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider1} alt="./images/locket1.jpg">

              </img>
                <p> AC-MB01</p>
                <h5 className='py-2'>Metal Bellow Seal(Unbalanced)  </h5>

              </div>
              <div className="my-rotate-y-180  absolute overflow-hidden backface-hidden w-80 mx-auto ">
                <p>Metal Bellow Seal Series are welded metal bellow seals used in chemical, petrochemical and refinery process pumps for moderate temperature and pressure application and for process services requiring corrosion resistance.... </p>
                <Link to='/bellow1'>Read more    </Link>

              </div>
            </div>
          </div>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider2} alt="./images/locket1.jpg">

              </img>
                <h5 className="py-4">Metal Bellow Seal(Balanced) </h5>
              </div>
              <div className="my-rotate-y-180  absolute overflow-hidden backface-hidden w-80 mx-auto  ">
                <p>Metal Bellow Seal Series is welded metal bellow seals used in process pumps for high temperature and moderate pressure applications in chemical, petrochemical & refineries. These bellow seals are constructed by welding a series of diaphragms together at the edges...</p>
                <Link to='/bellow2'>Read more    </Link>

              </div>
            </div>
          </div>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider3} alt="./images/locket1.jpg">

              </img>
                <h5 className='py-6'>Teflon bellow </h5>
              </div>
              <div className="my-rotate-y-180 px-2  absolute overflow-hidden backface-hidden w-80 mx-auto  ">
                <p>Teflon Bellow Seal Series are designed for extreme corrosive chemical applications including concentrated acids, salts, strong oxidising and reducing agents & chemically active organic compounds...</p>
                <Link to='/bellow3'>Read more    </Link>

              </div>
            </div>
          </div>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-2 m-4' src={slider4} alt="./images/locket1.jpg">

              </img>
                <p> AC-TB04</p>
                <h5 className='py-2'>Teflon Bellow</h5>
              </div>
              <div className="my-rotate-y-180 px-2  absolute overflow-hidden backface-hidden w-80 mx-auto  ">
                <p>Teflon Bellow Seal Series are designed for extreme corrosive chemical applications including concentrated acids, salts, strong oxidising and reducing agents & chemically active organic compounds. All components which come in contact ... </p>
                <Link to='/bellow4'>Read more    </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bellow;
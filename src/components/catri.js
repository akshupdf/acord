import React from "react";
import { Link } from "react-router-dom";
import slider1 from '../images/catri1.jpg'
import slider2 from '../images/catri4.png'
import slider3 from '../images/catri3.jpg'
import SideNavBar from "./sidenav";




function Catri() {
  return (

    <div className="flex w-[100%] h-screen ">
      <div className=" w-[20%]  relative ">
        <SideNavBar />
      </div>
      <div className='relative overflow-auto'>
        <div className='w-80 text-center mx-auto'>
          <h3>CARTRIDGE SEALS</h3>
        </div>

        <div className='h-[80%] py-4 flex flex-wrap overflow-auto  '>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider1} alt="./images/locket1.jpg">

              </img>
                <h4 className='py-6'>Cartridge Single Seal </h4>
              </div>
              <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto ">
                <p>Cartridge Single Seal Series is a specially designed cartridge seal for pumps handling oil, water and other fluids which are being pumped at high pressure...</p>
                <Link to='/catri1'>Read more    </Link>

              </div>
            </div>
          </div>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-2 w-80 h-52' src={slider2} alt="./images/locket1.jpg">

              </img>
                <p className="">AC-CTM01</p>
                <h4 className="py-2">Cartridge Double Seal </h4>
              </div>
              <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto  ">
                <p>High Pressure Cartridge Balanced Seal Series is a specially designed cartridge seal for pumps handling oil, water and other fluids which are being pumped at very high `pressure.</p>
                <Link to='/catri2'>Read more    </Link>

              </div>
            </div>
          </div>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider3} alt="./images/locket1.jpg">

              </img>

                <h5 className='py-2'>Cartridge Double Metal Bellow Seal</h5>
              </div>
              <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto ">
                <p>Cartridge type Double Metal Bellow Seal Series is welded metal bellow seals used in process pumps for high temperature and moderate pressure applications in chemical, petrochemical & refineries...</p>
                <Link to='/catri3'>Read more    </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Catri;
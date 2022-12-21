import React from "react";
import { Link } from "react-router-dom";

import slider1 from '../images/special1.jpg'
import slider2 from '../images/special2.jpg'
import slider3 from '../images/special3.jpg'
import SideNavBar from "./sidenav";




function Special() {
    return (

        <div className="flex w-[100%] h-screen relative ">
            <div className=" w-[20%]  relative ">
                <SideNavBar />
            </div>


            {/* <div className="max-w-sm bg-white border m-4  border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="/special1">
        <img className="rounded-t-lg" src={slider1} alt="" />
    </a>
    <div className="p-4">
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
<div className="max-w-sm bg-white h-80 border m-4 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="/special1">
        <img className="rounded-t-lg" src={slider1} alt="" />
    </a>
    <div className="p-4">
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
<div className="max-w-sm bg-white border h-80 m-4 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="/special1">
        <img className="rounded-t-lg" src={slider1} alt="" />
    </a>
    <div className="p-4">
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div> */}
            <div className='relative overflow-auto'>

                <div className='w-80 text-center mx-auto'>
                    <h3>SPECIAL SEALS</h3>
                </div>

                <div className='h-[80%] py-4 flex flex-wrap overflow-auto  '>
                    <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
                        <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

                            <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider1} alt="./images/locket1.jpg">

                            </img>
                                <h5 className='py-6'>Cartridge Seal </h5>
                            </div>
                            <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto  ">
                                <p>Cartridge Balanced Seal Series is a specially designed seal for pumps ETP water and other fluids which are being pumped. These seals are widely used in multistage pumps.</p>
                                <Link to='/special1'>Read more    </Link>

                            </div>
                        </div>
                    </div>
                    <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
                        <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

                            <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider2} alt="./images/locket1.jpg">

                            </img>
                                <h5 className="py-6">Rubber Bellow Seal </h5>
                            </div>
                            <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto ">
                                <p>Rubber Bellow Seal is a single coil spring seal with elastomeric bellow designed for Water, Oil and Light Duty Applications.</p>
                                <Link to='/special2'>Read more    </Link>

                            </div>
                        </div>
                    </div>
                    <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
                        <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

                            <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider3} alt="./images/locket1.jpg">

                            </img>
                                <h5 className='py-6'>Single Spring Seal </h5>
                            </div>
                            <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto ">
                                <p>The Seal is a single coil spring designed for general chemicals and Light Duty Applications.Torque transmission from drive collar to spring holder seal rings is done through sturdy drive lugs...</p>
                                <Link to='/special3'>Read more    </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Special;
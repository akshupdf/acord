import { Link } from 'react-router-dom'

import slider1 from '../images/multi1.jpg'
import slider2 from '../images/multi2.jpg'
import slider3 from '../images/multi3.jpg'
import slider4 from '../images/multi4.jpg'

import SideNavBar from './sidenav'


function Multi() {


  return (

    <div className="flex w-[100%] h-screen ">
      <div className=" w-[20%]  relative ">
        <SideNavBar />
      </div>
      <div className='relative overflow-auto'>
        <div className='w-80 text-center mx-auto'>
          <h3>MULTISPRING SEALS</h3>
        </div>
        <div className='h-[80%] py-4 flex flex-wrap overflow-auto  '>

          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider1} alt="./images/locket1.jpg">

              </img>
                <h5 className='py-4'>Multi Spring Seal (Unbalanced)</h5>
              </div>
              <div className="my-rotate-y-180  absolute overflow-hidden backface-hidden w-80 mx-auto py-4 ">
                <p>Multi Spring Seal Series are multiple spring units developed for universal high pressure application. Their compact design makes them suitable for use in all types of Centrifugal pumps...</p>
                <Link to='/multi1'>Read more    </Link>

              </div>
            </div>
          </div>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider2} alt="./images/locket1.jpg">

              </img>
                <p>AC-MS02</p>
                <h5 className='py-2'>Multi Spring Seal  (Unbalanced)</h5>
              </div>
              <div className="my-rotate-y-180 px-2  absolute overflow-hidden backface-hidden w-80 mx-auto py-4 ">
                <p>Multi Spring Seal Series are multiple spring units developed for universal high pressure application. Their compact design makes them suitable for use in all types of Centrifugal pumps. </p>
                <Link to='/multi2'>Read more    </Link>

              </div>
            </div>
          </div>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 w-60 h-50' src={slider4} alt="./images/locket1.jpg">

              </img>
                <p>AC-MS03</p>
                <h6 className=''>Multi Spring Seal (Reverse-Balanced)</h6>
              </div>
              <div className="my-rotate-y-180 px-2  absolute overflow-hidden backface-hidden w-80 mx-auto  py-4">
                <p>Multi Spring out Of Product Seal Series is a multiple spring specially developed for slurry application. The springs are protected from the media by means of dynamic O ring. </p>
                <Link to='/multi4'>Read more    </Link>

              </div>
            </div>
          </div>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider3} alt="./images/locket1.jpg">

              </img>
                <h5 className='py-4'>Multi Spring Seal (Unbalanced)</h5>
              </div>
              <div className="my-rotate-y-180 px-2  absolute overflow-hidden backface-hidden w-80 mx-auto  py-4">
                <p>Multi Spring Seal Series are multiple spring units developed for universal high pressure application. These type of Mechanical Seals are used mostly for slurry applications, their compact design makes them suitable for use in all types of Centrifugal pumps...</p>
                <Link to='/multi3'>Read more    </Link>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}



export default Multi;
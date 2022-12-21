import { Link } from 'react-router-dom'
import slider1 from '../images/react4.png'
import slider2 from '../images/react5.png'
import slider3 from '../images/anfd.png'
import slider4 from '../images/react6.png'
import slider5 from '../images/react7.png'
import SideNavBar from './sidenav'



function Reactor() {

  return (

    <div className="flex w-[100%] h-screen ">
      <div className=" w-[20%]  relative ">
        <SideNavBar />
      </div>
      <div className='relative overflow-auto'>
        <div className='w-80 text-center mx-auto'>
          <h3>REACTOR SEALS</h3>
        </div>
        <div className='h-[80%] py-4 flex flex-wrap overflow-auto  '>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className=' m-2 w-65 h-50' src={slider1} alt="./images/locket1.jpg">

              </img>(AC-ASD01)
                <h5 className=''>Dry Running Seal</h5>
              </div>
              <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto ">
                <p>Dry Running Seal Series is factory assembled & dynamic tested seal for steel, glass lined & SS mixers, agitators & vessels. It is a multiple spring externally mounted, reverse balanced</p>
                <Link to='/react1'>Read more    </Link>

              </div>
            </div>
          </div>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-2 m-2' src={slider2} alt="./images/locket1.jpg">

              </img>(AC-ASW01)
                <h5 className="py-12">Wet Running Seal without Bearing </h5>
              </div>
              <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto ">
                <p>Wet Running Seal without Bearing Series is factory assembled & dynamic tested seal for steel, glass lined & SS mixers, agitators & vessels.</p>
                <Link to='/react2'>Read more    </Link>

              </div>
            </div>
          </div>

          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className=' m-2 w-60 h-50 mx-auto' src={slider4} alt="./images/locket1.jpg">

              </img>(AC-ADU01)
                <h5 className=''>Double Unbalanced Mechanical Seal </h5>
              </div>
              <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto ">
                <p>Double Unbalanced Mechanical Seal Series are factory assembled cartridge units used on mixers, agitators & reactors. This seals are designed for handling severe services including products emitting toxic vapours during reaction process... </p>
                <Link to='/react4'>Read more    </Link>

              </div>
            </div>
          </div>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-2  w-60 h-50' src={slider5} alt="./images/locket1.jpg">

              </img>(AC-ADB01)
                <h6 className='py-6'>Double Balanced Mechanical Seal</h6>
              </div>
              <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto ">
                <p>Double Balanced Mechanical Seal Series are factory assembled cartridge units used on mixers, agitators & reactors. This seals are designed for handling severe services including products emitting toxic vapours during reaction process... </p>
                <Link to='/react5'>Read more    </Link>

              </div>
            </div>
          </div>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-2 m-2' src={slider3} alt="./images/locket1.jpg">

              </img>
                <h6 className='py-16'>Metallic Bellow for ANFD Mechanical Seals</h6>
              </div>
              <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto ">
                <p>Suitable for drying equipment such as Agitated Nutsche Filter Dryer ANFD is a closed vessel engineered to separate liquid and solid byfiltration under pressure.</p>
                <Link to='/react3'>Read more    </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default Reactor
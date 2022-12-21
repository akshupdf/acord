import slider1 from '../images/slider1.png'
import slider2 from '../images/images.jpg'
import slider3 from '../images/slider3.png'
import slider4 from '../images/slider4.png'
import slider5 from '../images/slider5.png'
import Side from "./sidenav";

function Product1() {

  return (

    <div className="flex w-[100%]">
      <div className="relative w-[20%]">
        <Side />
      </div>
      <div className='h-[80%] py-4 flex flex-wrap overflow-auto  '>
        <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
          <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

            <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider1} alt="./images/locket1.jpg">

            </img>
              <h3 className='py-8'>Name of part</h3>
            </div>
            <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto text-center h-full">
              <p>Some info about part</p>
              <Link to='/bellow1'>Read more    </Link>

            </div>
          </div>
        </div>
        <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
          <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

            <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider2} alt="./images/locket1.jpg">

            </img>
              <h3 className="py-6">Name of part</h3>
            </div>
            <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto text-center h-full">
              <p>Some info about part</p>
              <Link to='/bellow2'>Read more    </Link>

            </div>
          </div>
        </div>
        <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
          <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

            <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4' src={slider3} alt="./images/locket1.jpg">

            </img>
              <h3 className='py-6'>Name of part</h3>
            </div>
            <div className="my-rotate-y-180 px-2 py-20 absolute overflow-hidden backface-hidden w-80 mx-auto text-center h-full">
              <p>Some info about part</p>
              <Link to='/bellow3'>Read more    </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
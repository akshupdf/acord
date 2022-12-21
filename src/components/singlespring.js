

import { Link } from 'react-router-dom';
import slider1 from '../images/single3.jpg'
import slider2 from '../images/single8.jpg'
import slider3 from '../images/single5.jpg'
import SideNavBar from "./sidenav";







function Single() {


  //     const pproduct = [
  //         {
  //             id:1,
  //             pname: "golden locket",
  //             description: "A rare treasure which is 100 years old",
  //             price: "99459/- rupees",
  //             img: slider1,
  //             to: '/ac1',
  //             name: 'ac1'

  //         },
  //         {
  //             id:2,
  //             pname: "golden locket",
  //             description: "A rare treasure which is 100 years old",
  //             price: "99459/- rupees",
  //             img: slider2


  //         },
  //         {
  //             id:3,
  //             pname: "golden locket",
  //             description: "A rare treasure which is 100 years old",
  //             price: "99459/- rupees",
  //             img: slider3

  //         }]

  //     const list = pproduct.map((item) => 
  //     <div className=" p-4 mx-auto mb-8  items-center   hover:my-rotate-y-180 relative duration-1000" key={item.id}>
  //     <div className="w-[300px] h-[300px]  cursor-pointer "><img src={item.img} alt="./images/locket1.jpg"></img></div>
  //     <div className=" hover:my-rotate-y-180">
  //         <h1>{item.pname}</h1>
  //         <p>{item.description}</p>
  //     </div>
  //     <div><h1>{item.price}</h1></div>
  //     {/* <div>    {item.map(link => (<Link className={link.className} activeClassName={link.activeClassName} to={link.to}>{link.name}</Link> ))}
  // </div> */}
  //     </div>
  //     )
  //     return(
  //         <div className="flex w-[100%]">
  // <div className="relative w-[20%]">
  // <SideNavBar />

  // </div>

  //             <div className=" h-[full] w-full flex flex-wrap p-10 justify-center ">
  //         {list}
  //         </div>


  //         </div> )
  return (

    <div className="flex w-[100%] h-screen ">
      <div className=" w-[20%]   relative ">
        <SideNavBar />
      </div>
      <div className='relative overflow-auto'>

        <div className='w-80 text-center mx-auto'>
          <h3>SINGLE SPRING SEALS</h3>
        </div>
        <div className='h-[80%] py-4 flex flex-wrap overflow-auto  '>


          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 m-4 w-80 h-50' src={slider3} alt="./images/locket1.jpg">

              </img>
                <h4 className='py-2'>Conical Spring Seal</h4>
              </div>
              <div className="my-rotate-y-180  absolute overflow-hidden backface-hidden w-80 mx-auto ">
                <p>Conical Spring Seal is a conical helical spring, unbalanced seal with ‘O’ ring as secondary sealing member. Conical Spring is dependent on the direction of rotation of shaft, since the torque transmission is done by conical helical spring. Face Combination depends on the application of respective Mechanical Seal. Direction of rotation is seen from the drive end of the shaft.</p>
                <Link to='/single3'>Read more    </Link>

              </div>
            </div>
          </div>
          <div className=' h-80   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className='p-4 w-80 h-60 ' src={slider2} alt="./images/locket1.jpg">

              </img>
                <h4 className='py-4 '>Wave Spring Seal</h4>
              </div>
              <div className="my-rotate-y-180  absolute overflow-hidden backface-hidden w-80 mx-auto  ">
                <p>Wave Spring Unbalanced Seal Series are single wave spring seals suitable for most general applications. Advantage of these seals is due to use of single wave spring. Seal is of compact design with reduced axial length. These seals can also be used in dirty application as spring clogging does not occur.</p>

                <Link to='/single2'>Read more    </Link>

              </div>
            </div>
          </div>

          <div className=' h-80    border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer "><img className=' p-2 w-60 h-40 ml-4 m-4 ' src={slider1} alt="./images/locket1.jpg">

              </img>AC- S03
                <h4 className='py-10'>Single Spring Seal</h4>
              </div>
              <div className="my-rotate-y-180 px-2  absolute overflow-hidden backface-hidden w-80 mx-auto ">
                <p>Single Spring Seal ‘V’ Packing &‘O’ Ring are single helical coil spring, bi-directional seals developed for dirty media & clogging applications. Torque transmission from drive collar to spring holder seal rings is done through sturdy drive lugs. As all the parts are interchangeable, so this series can be converted from ‘V Packing’ to ‘O-ring’ by changing only secondary seal.</p>
                <Link to='/single1'>Read more    </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}



export default Single;
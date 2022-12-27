import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Slider from "react-slick";
import Typed from 'react-typed'
import slider1 from '../images/bellow2.jpg'
import slider2 from '../images/rotray3.jpg'
import slider3 from '../images/single5.jpg'
import slider4 from '../images/multi1.jpg'
import slider5 from '../images/react1.jpg'
import slider6 from '../images/catri3.jpg'
import '../App.css'
// import major from '../images/major.jpg'
// import major2 from '../images/major2.jpg'
// import major3 from '../images/major3.jpg'
// import major4 from '../images/major4.jpg'
// import major5 from '../images/major5.jpg'
// import vid from '../images/seal.mp4'
import { MDBCol, MDBRow, } from 'mdb-react-ui-kit';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.jpg'
import logo5 from '../images/logo5.jpg'
import logo6 from '../images/logo6.png'
import logo7 from '../images/logo7.jpg'
import logo8 from '../images/logo8.jpg'
import logo9 from '../images/logo9.jpg'
import logo10 from '../images/logo10.png'
import logo11 from '../images/logo11.png'
import logo12 from '../images/logo12.jpg'
import logo13 from '../images/logo13.jpg'
import logo14 from '../images/logo14.png'
import pump from '../images/pump5.gif'
import { Link } from 'react-router-dom';
import major from "../images/major1.jpg"




export default function Home() {



  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplayspeed: 3000,
    


    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 4,
        initialSlide: 2
      }
    }]
  };

  const settings1 = {

    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplayspeed: 3000,
    adaptiveHeight: true,
    variableHeight: false,
    vertical: true,
    verticalSwiping: true,


    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 4,
        initialSlide: 2
      }
    }]
  };

  return (

    <div className='text-center w-full h-full relative  '>
      {/* <div className=' w-[100vh] mx-auto '>

        <video  autoPlay loop muted className='' src={vid}> </video>


    </div> */}
      <div className=" w-[auto] flex text-center ">
        <img src={pump} alt="" className=' h-[70vh] mx-auto w-[180vh]'></img>
      </div>
      <div className='py-8'>
        <Typed
          className=' text-4xl bg-white font-bold  relative'
          strings={['Quality', 'Reliability', 'Performance', 'Delivered At A-Cord Seals']} typeSpeed={120} backSpeed={100} loop />
      </div>

      <div className=' text-left relative  font-serif mx-auto'>


        <MDBRow className='mx-auto  justify-content-center'>

          <MDBCol md='6' className=' mt-4 text-l shadow-2xl'>
            <p><span className='font-bold'>A-CORD SEALS INDIA PVT LTD.</span> is one of the leading manufacturers of ‘MECHANICAL SEALS’.
              <p>(MSME REGISTERED COMPANY)
                (ISO CERTIFIED 9001-2015)</p>

              <span className='font-bold'>A-CORD SEALS INDIA PVT LTD.</span>is a firm which is a mechanical shaft seals manufacturer with good quality and skilled manpower and this punctuality have made us reach a great height in the market today.


            </p>
            <p>Our seals are associated products mainly for the oil & gas, chemical, pharmaceutical, pulp & paper, power, mining and many more Industrial applications
            </p>
            <p>Apart from the standard range of products, we do undertake the Job of reconditioning and custom made seals depending on the basis of customers’ requirements and various applications.
            </p>
            <div className='w-auto mx-auto text-center'>
              <button className='text-center  rounded-lg h-10 m-4 border-2 p-2' ><Link to='/about'>Know more ?</Link> </button>
              <button className='text-center  rounded-lg h-10 m-4 border-2  p-2' ><a href='https://drive.google.com/file/d/1Vi-oef46Ba9XJY-T-6eBADlDRshy5LH2/view?usp=share_link'>View Catalogue</a> </button>
            </div>

          </MDBCol>
        </MDBRow>

      </div>

      <div className='p-10  mb-10  '>
        <h2> Our products</h2>
        <p>We commit to achieve high level of customer satisfaction by providing high quality mechanical shaft seals with 100% sealing solutions.</p>

        <Slider {...settings}>

          <div className="p-4  mb-8    m-4 hover:scale-150 ease-in-out duration-300">
            <div className=" cursor-pointer "><img src={slider1} alt="./images/locket1.jpg"></img></div>

          </div>



          <div className="p-4  mb-8   items-center m-4 hover:scale-150 ease-in-out duration-300">
            <div className=" cursor-pointer "><img src={slider2} alt="./images/locket1.jpg"></img></div>


          </div>



          <div className="p-4   mb-8   items-center m-4 hover:scale-150 ease-in-out duration-300">
            <div className=" cursor-pointer "><img src={slider3} alt="./images/locket1.jpg"></img></div>


          </div>



          <div className="p-4  mb-8   items-center m-4 hover:scale-150 ease-in-out duration-300 ">
            <div className="  cursor-pointer  "><img  src={slider4} alt="./images/locket1.jpg"></img></div>


          </div>



          <div className="p-4  mb-8   items-center m-4 hover:scale-150 ease-in-out duration-300">
            <div className=" cursor-pointer "><img src={slider5} alt="./images/locket1.jpg"></img></div>


          </div>


          <div className="p-4  mb-8   items-center m-4 hover:scale-150 ease-in-out duration-300 ">
            <div className=" cursor-pointer "><img src={slider6} alt="./images/locket1.jpg"></img></div>

         
          </div>

        </Slider>
      </div>
      <hr></hr>
      <div className='sm:hidden'>
        <img src={major} alt="" className=''></img>
      </div>
      <div className='w-full h-50 d-none d-lg-block'>

        <h2 className='p-10  mb-10 text-6xl'>Clientele</h2>
        <div className=' h-50 grid grid-cols-5'>


          <Slider  {...settings1} >

            <div className="p-4  mb-8   items-center  ">
              <div className=" cursor-pointer "><img src={logo4} alt="./images/locket1.jpg"></img></div>
            </div>
            <div className="p-4  mb-8   items-center   ">
              <div className=" cursor-pointer "><img src={logo5} className="h-40 w-60" alt="./images/locket1.jpg"></img></div>
            </div>
            <div className="p-4  mb-8   items-center   ">
              <div className=" cursor-pointer "><img src={logo6} className="h-40 w-60" alt="./images/locket1.jpg"></img></div>
            </div>
          </Slider>
          <Slider  {...settings1} >
            <div className="p-4  mb-8   items-center   ">
              <div className=" cursor-pointer "><img src={logo7} className="h-40 w-60" alt="./images/locket1.jpg"></img></div>
            </div>
            <div className="p-4  mb-8   items-center   ">
              <div className=" cursor-pointer "><img src={logo8} className="h-40 w-60" alt="./images/locket1.jpg"></img></div>
            </div>
            <div className="p-4  mb-8   items-center   ">
              <div className=" cursor-pointer "><img src={logo9} className="h-40 w-60" alt="./images/locket1.jpg"></img></div>
            </div>
          </Slider>
          <Slider  {...settings1} >
            <div className="p-4  mb-8   items-center   ">
              <div className=" cursor-pointer "><img src={logo10} className="h-40 w-60" alt="./images/locket1.jpg"></img></div>
            </div>
            <div className="p-4  mb-8   items-center   ">
              <div className=" cursor-pointer "><img src={logo11} className="h-40 w-60" alt="./images/locket1.jpg"></img></div>
            </div>
            <div className="p-4  mb-8   items-center   ">
              <div className=" cursor-pointer "><img src={logo12} className="h-40 w-60" alt="./images/locket1.jpg"></img></div>
            </div>
          </Slider>
          <Slider  {...settings1} >
            <div className="p-4  mb-8   items-center   ">
              <div className=" cursor-pointer "><img src={logo13} className="h-40 w-60" alt="./images/locket1.jpg"></img></div>
            </div>
            <div className="p-4  mb-8   items-center   ">
              <div className=" cursor-pointer "><img src={logo14} className="h-40 w-60" alt="./images/locket1.jpg"></img></div>
            </div>
          </Slider>
          <Slider  {...settings1} >

            <div className="p-4  mb-8   items-center  ">
              <div className=" cursor-pointer "><img src={logo1} className="h-40 w-60" alt="./images/locket1.jpg"></img></div>
            </div>
            <div className="p-4  mb-8   items-center   ">
              <div className=" cursor-pointer "><img src={logo2} className="h-40 w-60" alt="./images/locket1.jpg"></img></div>
            </div>
            <div className="p-4  mb-8   items-center   ">
              <div className=" cursor-pointer "><img src={logo3} className="h-40 w-60" alt="./images/locket1.jpg"></img></div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
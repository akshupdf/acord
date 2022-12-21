import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiInstagram, FiLinkedin ,FiFacebook} from "react-icons/fi";
import { FaTelegram } from "react-icons/fa"
import { MDBIcon } from 'mdb-react-ui-kit';



export default function Footer() {
  return (
    <div className=''>
      <MDBFooter className='text-center text-lg-start  text-muted  text-l text-black'>


        <section className=' text-black'>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto '>
                <h5 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon color='secondary' icon='gem' className='' />
                  Head Office and Manufacturing Unit:
                </h5>
                <h6 className='font-bold'>A-CORD SEALS INDIA PVT LTD.</h6>
                <p>

                  657, Raj Rajeshwari Compound,
                  Near Sonale Police Station,
                  Sonale, Bhiwandi 421302
                  Maharashtra, India

                </p>
              </MDBCol>




              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                {/* <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p> */}
              </MDBCol>
              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Follow us on:-</h6>
                <div className='flex'>
                <h1 className="p-2 text-3xl"><a href="https://facebook.com/"><FiFacebook/></a> </h1>
                  <h1 className="p-2 text-3xl"><a href="https://www.instagram.com/"><FiInstagram /></a> </h1>
                  <h1 className="p-2 text-3xl"><a href="https://www.linkedin.com/in/"><FiLinkedin /></a> </h1>
                  <h1 className="p-2 text-3xl"><a href="https://telegram.org/"><FaTelegram /></a> </h1>
                </div>





              </MDBCol>

            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-right p-[-10] mr-5' >
          © Copyright 2022 : A-CORD SEALS INDIA PVT LTD.

          <p>Developer <a href='https://akshupdf.github.io/profile'>akshupdf</a></p>
        </div>
      </MDBFooter>
    </div>
  );
}
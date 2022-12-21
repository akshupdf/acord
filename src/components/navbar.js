// import {Link} from 'react-router-dom' ;
// import logo from '../images/logo.png'

// function Navbar ()  {

//     return(

//         <div className=' text-2xl flex '>
//             <img className='w-15 h-15 rounded-full m-2 ml-20' src={logo} alt=""></img>
//             {/* <h1>A-CORD SEALS </h1> */}

//             <div className=''>
//             <ul className='flex  p-4 l-0    absolute top-0 right-0 '>
//          <li className='p-4 ' ><Link to='/home'>Home </Link></li>
//          <li className='p-4'><Link to='/about'>About us</Link></li>
//           <li className='p-4'><Link to='/product'> Products</Link></li>
//           <li className='p-4'><Link to='/contact'>Contact us</Link></li>
//         </ul>

//             </div>

//         </div>



//     )

// }

//  export default Navbar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logoo.jpg'
import { useState } from 'react';

function Panel() {

  const [show, setShow] = useState(false);

  const showdropdown = (e) => {
    setShow(!show);

  }

  const hidedropdown = (e) => {
    setShow(false);
  }

  return (
    <div className='sticky-top font-mono   bg-white   justify-center text-center'>
      <Navbar expand="lg" className='' >

        <Container className='h-20  ' >
          <Navbar.Brand href="/" ><img className='w-30 h-20   rounded-full' src={logo} alt=""></img></Navbar.Brand>
          <div className='mt-4 font-serif d-none d-lg-block'>
            <h5>A-CORD SEALS INDIA PVT LTD</h5>
            <p className='font-italic'>"Your attention, Our Co-ordination"</p>
          </div>


          <Navbar.Toggle aria-controls="basic-navbar-nav" className=' ' />
          <Navbar.Collapse className='  ' id="basic-navbar-nav">
            <Nav className=" text-xl  ml-[50%]  " >
              <Nav.Link href="/" className='  '>Home</Nav.Link>

              <NavDropdown title="Products" id="basic-nav-dropdown" show={show}
                onMouseEnter={showdropdown}
                onMouseLeave={hidedropdown}>
                <NavDropdown.Item href="/single">Single Spring Seals</NavDropdown.Item>
                <NavDropdown.Item href="/bellow">Bellow Seals</NavDropdown.Item>
                <NavDropdown.Item href="/multi">Multispring Seals</NavDropdown.Item>
                <NavDropdown.Item href="/special">Special Seals For Pumps</NavDropdown.Item>
                <NavDropdown.Item href="/catri">Cartridge Seals</NavDropdown.Item>
                <NavDropdown.Item href="/rotary">Rotray Joint & Union</NavDropdown.Item>
                <NavDropdown.Item href="/react">Reactor Seals</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/about" className=' '>About Us</Nav.Link>
              <Nav.Link href="/contact" className=' '>contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Panel;
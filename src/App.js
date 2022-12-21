
import './App.css';

import Contact from './components/contact'
import About from './components/about'
import Panel from './components/navbar'
import Product from './components/product';
import Home from './components/home'
import {
  BrowserRouter ,
  Routes,
  Route,

} from 'react-router-dom';


import Footer from './components/footer';
import Single from './components/singlespring';
import Multi from './components/multispring';
import Bellow from './components/bellow';
import Special from './components/special';
import Catri from './components/catri';
import Ac1 from './components/acs01';
import Reactor from './components/react';
import Rotary from './components/rotary';
import Rotary1 from './components/rotary1';
import Rotary2 from './components/rotary2';
import Rotary3 from './components/rotary3';
import Single1 from './components/single1';
import Single3 from './components/single3';
import Single2 from './components/single2';
import Multi1 from './components/multi1';
import Multi2 from './components/multi2';
import Multi3 from './components/multi3';
import Below1 from './components/below1';
import Below2 from './components/below2';
import Below3 from './components/below3';
import Special1 from './components/special1';
import Special2 from './components/special2';
import Special3 from './components/special3';
import Catri1 from './components/catri1';
import Catri2 from './components/catri2';
import Catri3 from './components/catri3';
import React1 from './components/react1';
import React2 from './components/react2';
import React3 from './components/react3';

import Below4 from './components/bellow4';
import Multi4 from './components/multi4';
import React4 from './components/react4';
import React5 from './components/react5';

function App() {
  return (
   
    
    <BrowserRouter>
    <Panel />
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About />} ></Route>
      <Route exact path='/product' element={<Product />}></Route>
      <Route exact path='/contact' element={<Contact />}></Route>
      <Route exact path='/single' element={<Single />}></Route>
      <Route exact path='/single1' element={<Single1 />}></Route>
      <Route exact path='/single2' element={<Single2 />}></Route>
      <Route exact path='/single3' element={<Single3 />}></Route>
      <Route exact path='/multi' element={<Multi />}></Route>
      <Route exact path='/multi1' element={<Multi1 />}></Route>
      <Route exact path='/multi2' element={<Multi2 />}></Route>
      <Route exact path='/multi3' element={<Multi3 />}></Route>
      <Route exact path='/multi4' element={<Multi4 />}></Route>
      <Route exact path='/bellow' element={<Bellow/>}></Route>
      <Route exact path='/bellow1' element={<Below1/>}></Route>
      <Route exact path='/bellow2' element={<Below2/>}></Route>
      <Route exact path='/bellow3' element={<Below3/>}></Route>
      <Route exact path='/bellow4' element={<Below4/>}></Route>
      <Route exact path='/special' element={<Special />}></Route>
      <Route exact path='/special1' element={<Special1 />}></Route>
      <Route exact path='/special2' element={<Special2 />}></Route>
      <Route exact path='/special3' element={<Special3 />}></Route>
      <Route exact path='/catri' element={<Catri />}></Route>
      <Route exact path='/catri1' element={<Catri1 />}></Route>
      <Route exact path='/catri2' element={<Catri2 />}></Route>
      <Route exact path='/catri3' element={<Catri3 />}></Route>
      <Route exact path="/ac1" element={<Ac1 />}></Route>
      <Route exact path="/react" element={<Reactor />}></Route>
      <Route exact path="/react1" element={<React1 />}></Route>
      <Route exact path="/react2" element={<React2 />}></Route>
      <Route exact path="/react3" element={<React3 />}></Route>
      <Route exact path="/react4" element={<React4 />}></Route>
      <Route exact path="/react5" element={<React5 />}></Route>
      <Route exact path="/rotary" element={<Rotary />}></Route>
      <Route exact path="/rotary1" element={<Rotary1 />}></Route>
      <Route exact path="/rotary2" element={<Rotary2 />}></Route>
      <Route exact path="/rotary3" element={<Rotary3 />}></Route>
     
      

    </Routes>
    
    <Footer />
</BrowserRouter>

   
  );
}

export default App;

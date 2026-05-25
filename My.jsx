// import react from './react';
// import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
// import Home from './Home';
// import Contact from './Contact';
// import Shop from './Shop';
// import No_page from './No_page';
// function My(){
//     return(
//         <>
//         <Router>
//             <div className='main-route'>
//                 <ul>
//                     <li><Link to='/'>Home</Link></li>
//                     <li><Link to='/Shop'>Shop</Link></li>
//                     <li><Link to='/Contact'>Contact</Link></li>
//                 </ul>

//             </div>
//             <Routes path='/' element={{Home}}/>
//             <Routes path='/Contact' element={{Contact}}/>
//             <Routes path='/Shop' element={{Shop}}/>
//             <Routes path='*' element={{No_page}}/>

        


//         </Router>
//         </>
//     )
// }
// export default My

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Shop from "./Shop";
import NoPage from "./No_page";

function My() {
  return (
    <>
      <Router>
        <div className="main-route">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default My;

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            LAMP FOUNDATION
            <i class="fa-solid fa-heart"></i>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>


          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                PROGRAMS
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;




























// import React ,{useState,useEffect} from 'react';
// import  './Navbar.css';

// import {Link} from 'react-router-dom';
// import {Button} from './Button';

// function Navbar()
// {
//     const [click,setClick]=useState(false);
//     const[button,setButton]=useState(true);

//     const HandleClick = ()=>setClick(!click);
//     const CloseMobileMenu=()=>setClick(false);

//     const showButton=()=>
//     {
//         if(window.innerWidth<=960)
//         {
//             setButton(false);
//         }
//         else{
//             setButton(true);
//         }
//     };
//     //use Effect is used to prevent signup butt
//     // on to come up after refreshing even though
//     //  screen is shrinked below 960

//     useEffect(() => {
//         showButton();
//       }, []);

//     window.addEventListener('resize',showButton);

//     return (
//         <>
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <Link to="/" className='navbar-logo' onClick={CloseMobileMenu}>
//                     TRAVEL 
//                     <i class='fab fa-typo3' />
//                 </Link>
                
//                 <div className='menu-icon' onClick={HandleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//              </div>

//                 <ul className={ click? 'nav-menu active':'nav-menu'}>
//                     <li className='nav-item'>
//                         <Link to="/services" className='nav-links' onclick={CloseMobileMenu}>
//                             Services
//                         </Link>
//                         </li>
//                     <li className='nav-item'>
//                         <Link to="/home" className='nav-links' onclick={CloseMobileMenu}>
//                             Home
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to="/products" className='nav-links' onclick={CloseMobileMenu}>
//                            Products
//                         </Link>
//                         </li>
//                     <li className='nav-item'>
//                         <Link to="/sign-up" className='nav-links-mobile' onclick={CloseMobileMenu}>
//                           Sign Up
//                         </Link>
//                         </li>

//                 </ul>
//                 {button && <Button buttonstyle='btn--outline'>SIGN-UP</Button>}
//             </div>
//         </nav>

//         </>
//     )
// }
// export default Navbar;
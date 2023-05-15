import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/products' element={<Products/>} />
          <Route exact path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;















// import './App.css';
// import Navbar from './components/Navbar';
// import home from './components/Pages/Home';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

// function App(){
//   return (
//    <div classname='App'>
    
//     <Router>
//      <Navbar/>
//      <Routes>
      
//       <Route path='/' exact component={home} />
//           {/* <Route path='/services' component={Services} />
//           <Route path='/products' component={Products} />
//           <Route path='/sign-up' component={SignUp} /> */}
//      </Routes>
//     </Router>
    

//     </div>
//   );
// }

// export default App;



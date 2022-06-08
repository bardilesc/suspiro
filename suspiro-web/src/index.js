import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// react route 
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Proyects from './pages/Proyects';

// style
import "./styles/general.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
           <div className="App">
              <div className='menu'>
                
                <Link to="/" className='menu-item' >Home</Link>
                <Link to="/proyects" className='menu-item' >Proyects</Link>
                <Link to="/contact" className='menu-item' >Contact Us</Link>

              </div>
                
           
           
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/proyects' element={< Proyects />}></Route>
          </Routes>
          
          
          </div>
       </Router>

       


  </React.StrictMode>
);


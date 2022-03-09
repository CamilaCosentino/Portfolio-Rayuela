

import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Contacto from './components/Contacto';

import WorkDetails from './components/Details';
import Footer from './components/Footer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Works from './components/pages/Works';
import ReelView from './components/Reel/ReelView';
import Sidebar from './components/SideBar';




function App() {
  return (
<>
<Sidebar/>
  <Routes>
    <Route path='/#portfolio' element={<Works/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contacto' element={<Contacto/>}></Route>
    
    <Route path='/portfolio/:id' element={<WorkDetails/>}></Route>
    <Route path='/portfolio/categories/:label' element={<Works/>}></Route>
    <Route path='/reel' element={<ReelView/>}></Route>
  </Routes>

  <Footer/>
  </>
  );
  }
export default App;

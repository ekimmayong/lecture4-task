import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Signup from './Signup';
import Navbar from './Navbar';
import ContactUs from './ContactUs';

const RouterApp =() => {

    return (
      <BrowserRouter>
        <Navbar />
        <Container sx={{mt:'3rem'}}>
           <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contacts' element={<ContactUs />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Container>

         
      </BrowserRouter>
    )
}

export default RouterApp
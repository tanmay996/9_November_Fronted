import React from 'react';
import  ReactDOM  from 'react-dom/client';
import Layout from './Layout';
import './style.css';
import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import About from './components/user/About';
import Home from './components/user/Home';
import Service from './components/user/Service';
import Resume from './components/user/Resume';
const root = ReactDOM.createRoot(document.getElementById("demo-app"));
root.render(
    <>

    <BrowserRouter>
    <Routes>
        <Route index element={<Layout/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/service' element={<Service/>}/>
    </Routes>
    </BrowserRouter>

    </>

)
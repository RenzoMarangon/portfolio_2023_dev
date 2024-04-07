import { useState } from 'react';
import { Toaster, toast } from 'alert';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';


import './styles/App.css';
import { Home } from './views/Home';

import { Header } from './views/Header';
import { AboutMe } from './views/AboutMe';
import { Contact } from './views/Contact';
import { Likes } from './views/Likes';
import { Search } from './views/Search';
import { Message } from './views/Message';






function App() {


  const positionToaster = `${window.innerWidth <= 638 ? 'top-center' : 'bottom-right'}`;

  


  return (
      <main className="w-full h-screen shadow sm:h-50 flex    sm:justify-center items-center  sm:flex-row gap-x-5 text-sm ">
        <BrowserRouter>
          {/* <button onClick={()=>cambiarVista('home')}> Moxtrar </button> */}

          <Header />

            <Routes>

              <Route path='/' element = { <Home />  }/>
              <Route path='/AboutMe' element = { <AboutMe />  }/>
              <Route path='/Contact' element = { <Contact />  }/>
              <Route path='/Likes' element = { <Likes />  }/>
              <Route path='/Search' element = { <Search />  }/>
              <Route path='/Message' element = { <Message />  }/>

   
            </Routes>
        </BrowserRouter>

        <Toaster position={`${positionToaster}`}/>
      
      </main>
  );
}

export default App;

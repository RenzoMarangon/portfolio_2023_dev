import React, { useState } from 'react';
import { Toaster, toast } from 'alert';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import { Home } from './views/Home';

import { Header } from './views/Header';
import { AboutMe } from './views/AboutMe';
import { Contact } from './views/Contact';
import { Search } from './views/Search';
import { ContextStore } from './helpers/ContextStore';



function App() {


  const positionToaster = `${window.innerWidth <= 638 ? 'top-center' : 'bottom-right'}`;

  const [style, setStyle] = useState({});

  React.useEffect(()=>{
    setStyle({
      backgroundImage: './back.webp'
    });
  },[])


  return (
      <div className="w-full h-screen shadow flex sm:justify-center items-center  gap-x-5 text-sm ">
        <ContextStore>
        
        <BrowserRouter>
          {/* <button onClick={()=>cambiarVista('home')}> Moxtrar </button> */}
          <Header />

            <Routes>

              <Route path='/' element = { <Home />  }/>
              <Route path='/AboutMe' element = { <AboutMe />  }/>
              <Route path='/Contact' element = { <Contact />  }/>
              <Route path='/Search' element = { <Search />  }/>

   
            </Routes>
        </BrowserRouter>

        <Toaster position={`${positionToaster}`}/>
        </ContextStore>
      
      </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import { Home } from './Home';
import { useEffect, useState } from 'react';

import { Header } from './Header';
import { AboutMe } from './AboutMe';





function App() {

// console.log(icons.javascript.split('/',3)[2].split('.',2)[0]);
const [vistas, setVistas ] = useState(
  {
    home:true,
    profile:false,
  }) 




  return (
    <body className=''>
      <main className="w-full h-screen shadow sm:h-50 flex flex-col  sm:justify-center items-center sm:h-screen sm:flex-row gap-x-5 text-sm ">
        
        {/* <button onClick={()=>cambiarVista('home')}> Moxtrar </button> */}

        <Header vistas = { vistas } setVistas = { setVistas }/>

        {vistas.home && <Home />}
        

        { vistas.profile && <AboutMe /> }
      
      </main>
    </body>
  );
}

export default App;

import { useState } from 'react';
import { Toaster, toast } from 'alert';

import './styles/App.css';
import { Home } from './views/Home';

import { Header } from './views/Header';
import { AboutMe } from './views/AboutMe';
import { Contact } from './views/Contact';
import { Likes } from './views/Likes';
import { Search } from './views/Search';
import { Message } from './views/Message';






function App() {



// console.log(icons.javascript.split('/',3)[2].split('.',2)[0]);
const [vistas, setVistas ] = useState(
  {
    home:true,
    profile:false,
    contact:false,
    likes:false,
    search:false,
    message:false,
  }) 

  const positionToaster = `${window.innerWidth <= 638 ? 'top-center' : 'bottom-right'}`;

  


  return (
      <main className="w-full h-screen shadow sm:h-50 flex    sm:justify-center items-center  sm:flex-row gap-x-5 text-sm ">
        
        {/* <button onClick={()=>cambiarVista('home')}> Moxtrar </button> */}

        <Header vistas = { vistas } setVistas = { setVistas }/>

        {vistas.home && <Home />}
        {vistas.profile && <AboutMe /> }
        {vistas.contact && <Contact /> }
        {vistas.likes && <Likes /> }
        {vistas.search && <Search /> }
        {vistas.message && <Message/> }

        <Toaster position={`${positionToaster}`}/>
      
      </main>
  );
}

export default App;

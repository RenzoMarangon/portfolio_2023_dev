import logo from './logo.svg';
import './App.css';

import { Home } from './Home';
import { useState } from 'react';






function App() {

// console.log(icons.javascript.split('/',3)[2].split('.',2)[0]);
const [vistas, setVistas ] = useState(
  {
    home:true,
  }) 

const cambiarVista = ( vistaSeleccionada ) =>
{
  let vistasActuales = {};
  

  Object.entries( vistas ).map( ( objetoVista) =>{
    const [vista, valor] = objetoVista;


    if(vista == vistaSeleccionada ) vistasActuales = { ...vistas, [vista]:valor}
    else vistasActuales = { ...vistas, [vista]:false};

    return true;
  }) 


}

  return (
    <body className=''>
      <main className="w-full h-screen shadow sm:h-50 flex flex-col  sm:justify-center items-center sm:h-screen sm:flex-row gap-x-5 text-sm ">
        
        <button onClick={cambiarVista('home')}> Moxtrar </button>

        {vistas.home && <Home />}

      </main>
    </body>
  );
}

export default App;

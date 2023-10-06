import { useState } from "react";


export const Header = ({vistas, setVistas}) =>
{


  const [icons, setIcons] = useState(
  {
    user : './iconos/user_w.png',
    house :'./iconos/house_w.png',
    heart :'./iconos/heart_w.png',
    search :'./iconos/search_w.png',
    edit :'./iconos/edit_w.png',

  });


  const cambiarVista = ( vistaSeleccionada ) =>
  {
  
    let vistasActuales = {};
  
    recorrerobjetos(vistaSeleccionada, vistasActuales)
  
    setVistas( vistasActuales );
  
  }
  
  const recorrerobjetos = (vistaSeleccionada, vistasActuales) =>{
    Object.keys( vistas ).map( (vista) =>{
      if( vistaSeleccionada == vista ) vistasActuales[vista] = true
      else vistasActuales[vista] = false;
    })
  }

    return(
        <header className="header shadow absolute bottom-0 w-screen h-100 absolute  sm:relative  sm:h-2/5 sm:w-12  my-auto box-content  sm:rounded-full    flex justify-evenly sm:justify-around items-center sm:flex-col flex-row   ">
          
          
            <button onClick={()=>cambiarVista('home')} className='w-8 sm:w-6 '> <img className='hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0' src={ `${process.env.PUBLIC_URL + icons.house }` } /> </button>
            <button onClick={()=>cambiarVista('likes')} className='w-8 sm:w-6 '> <img className='hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0' src={ `${process.env.PUBLIC_URL + icons.heart }` } /> </button>
            <button onClick={()=>cambiarVista('search')} className='w-8 sm:w-6 '> <img className='hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0' src={ `${process.env.PUBLIC_URL + icons.search }` } /> </button>
            <button onClick={()=>cambiarVista('contact')} className='w-8 sm:w-6 '> <img className='hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0' src={ `${process.env.PUBLIC_URL + icons.edit }` } /> </button>
            <button onClick={()=>cambiarVista('profile')} className='w-8 sm:w-6 '> <img className='hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0' src={ `${process.env.PUBLIC_URL + icons.user }` } /> </button>
          
         
          {/* FONDO */}
          {/* <div className=' w-full absolute top-0 left-0  h-full z-0 border rounded-xl  backdrop-blur-xsm '></div> */}

        </header>
    )
}
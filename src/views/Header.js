
import { Tooltip } from '@mui/material'

import { icons } from "../helpers/icons.json";

export const Header = ({vistas, setVistas}) =>
{



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
        <header className="header shadow-lg shadow-inherit  w-screen h-100 sm:relative  sm:h-2/5 sm:w-12  sm:my-auto box-content  sm:rounded-full    flex justify-evenly sm:justify-around items-center sm:flex-col flex-row   ">
          
          
            <Tooltip title={"Inicio"} placement={"bottom"}>
              <button onClick={()=>cambiarVista('home')} > <img className={`w-8 sm:w-6  hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0 ${ vistas.home && 'ring-4 bg-slate-100/50' }`} src={ `${icons.home }` } /> </button>
            </Tooltip>

            {/* <button onClick={()=>cambiarVista('likes')} > <img className={`w-8 sm:w-6  hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0 ${ vistas.likes && 'ring-4 bg-slate-100/50' }`} src={ `${icons.edit }` } /> </button> */}
            <Tooltip title={"Buscar"} placement={"bottom"}>
              <button onClick={()=>cambiarVista('search')} > <img className={`w-8 sm:w-6  hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0 ${ vistas.search && 'ring-4 bg-slate-100/50' }`} src={ `${icons.search }` } /> </button>
            </Tooltip>

            <Tooltip title={"Comentarios"} placement={"bottom"}>
              <button onClick={()=>cambiarVista('message')} > <img className={`w-8 sm:w-6  hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0 ${ vistas.message && 'ring-4 bg-slate-100/50'} `} src={ `${icons.message }` } /> </button>
            </Tooltip>

            <Tooltip title={"Contacto"} placement={"bottom"}>
              <button onClick={()=>cambiarVista('contact')} > <img className={`w-8 sm:w-6  hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0 ${ vistas.contact && 'ring-4 bg-slate-100/50'}`} src={ `${icons.email }` } /> </button>
            </Tooltip>

            <Tooltip title={"Perfil"} placement={"bottom"}>
              <button onClick={()=>cambiarVista('profile')} > <img className={`w-8 sm:w-6  hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0 ${ vistas.profile && 'ring-4 bg-slate-100/50'} `} src={ `${icons.user }` } /> </button>
            </Tooltip>

          
         
          {/* FONDO */}
          {/* <div className=' w-full absolute top-0 left-0  h-full z-0 border rounded-xl  backdrop-blur-xsm '></div> */}

        </header>
    )
}
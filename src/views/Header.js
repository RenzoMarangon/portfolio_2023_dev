
import { Tooltip } from '@mui/material'
import { Link } from 'react-router-dom';

import { icons } from "../helpers/icons.json";

export const Header = () =>
{



  // const cambiarVista = ( vistaSeleccionada ) =>
  // {
  
  //   let vistasActuales = {};
  
  //   recorrerobjetos(vistaSeleccionada, vistasActuales)
  
  //   setVistas( vistasActuales );
  
  // }
  
  // const recorrerobjetos = (vistaSeleccionada, vistasActuales) =>{
  //   Object.keys( vistas ).map( (vista) =>{
  //     if( vistaSeleccionada == vista ) vistasActuales[vista] = true
  //     else vistasActuales[vista] = false;
  //   })
  // }

    return(
        <header className="header shadow-lg shadow-inherit  w-screen h-100 sm:relative  sm:h-2/5 sm:w-12  sm:my-auto box-content  sm:rounded-full    flex justify-evenly sm:justify-around items-center sm:flex-col flex-row   ">
          
          
            {/* <Tooltip title={"Inicio"} placement={"bottom"}>
              <button onClick={()=>cambiarVista('home')} > <img className={`w-8 sm:w-6  hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0 ${ vistas.home && 'ring-4 bg-slate-100/50' }`} src={ `${icons.home }` } /> </button>
            </Tooltip> */}

            {/* <button onClick={()=>cambiarVista('likes')} > <img className={`w-8 sm:w-6  hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0 ${ vistas.likes && 'ring-4 bg-slate-100/50' }`} src={ `${icons.edit }` } /> </button> */}
            
            <Tooltip title={"Inicio"} placement={"bottom"}>
              <Link to={'/'}  >
              <button > <img className={`w-8 sm:w-6  hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0`} src={ `${icons.home }` } /> </button>
              </Link>            
            </Tooltip>

            <Tooltip title={"Comentarios"} placement={"bottom"}>
              <Link to={'/Message'}  >
                <button > <img className={`w-8 sm:w-6  hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0`} src={ `${icons.message }` } /> </button>
              </Link> 
            </Tooltip>

            <Tooltip title={"Contacto"} placement={"bottom"}>
              <Link to={'/Contact'}  >
                <button > <img className={`w-8 sm:w-6  hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0`} src={ `${icons.email }` } /> </button>
              </Link> 
            </Tooltip>

            <Tooltip title={"Perfil"} placement={"bottom"}>
              <Link to={'/AboutMe'}  >
                <button > <img className={`w-8 sm:w-6  hover:ring-4 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-1 sm:m-0`} src={ `${icons.user }` } /> </button>
              </Link> 
            </Tooltip>

          
         
          {/* FONDO */}
          {/* <div className=' w-full absolute top-0 left-0  h-full z-0 border rounded-xl  backdrop-blur-xsm '></div> */}

        </header>
    )
}
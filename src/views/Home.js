import React, { useContext, useEffect, useState }  from 'react'
import { Tooltip } from '@mui/material'

import Skill from '../components/Skill';
import { Post } from '../components/Post';
import { icons,skills } from '../helpers/icons.json';

import { proyectos } from '../helpers/proyects.json';
import { useStorex } from '../helpers/store';
import { ProfileMenu } from '../components/ProfileMenu';
import { guardarComentario, guardarProyectos, obtenerProyectosFirebase } from '../helpers/firestore';
import { obtenerUsuario } from '../helpers/auth';
import { obtenerUsuarioLocalStorage } from '../helpers/functions';


export const Home = () => {



  const [follows, setFollows ] = useState( useStorex().follows );

  const [ user, setUser] = useState( useStorex().usuario );

  const cambiarFollows = ( newFollows ) => { setFollows(newFollows) };

  const [ projects, setProjects] = useState( useStorex().projects );


  
  useEffect(()=>{
    
    setUser(obtenerUsuarioLocalStorage());

    obtenerProyectosFirebase();
    setProjects(JSON.parse(localStorage.getItem('projects')));
  },[])



  return (
    <>
        {/* <!--MAIN--> */}
        <div className="main shadow-inner shadow-xl overflow-y-auto sm:rounded-2xl container h-full w-full flex flex-col sm:grid   sm:grid-rows-1 sm:grid-cols-4 box-content  sm:w-5/6 xl:w-2/3 flex sm:h-5/6 ">
          
          {/* MAIN CONTAINER */}
          <div className="main__container h-100 sm:col-span-3 container p-2 pt-4 sm:overflow-auto">
        
            {/* MAIN HEADER */}
            <div className="main__header flex flex-col ">
              
              <div className='grid  grid-cols-10 mb-4 '>

              <Tooltip title={`${user === null ? "invitado" : user.displayName }`} placeholder='bottom'>
          

                <ProfileMenu userx = {user}/>
              </Tooltip>

                <input type="text" placeholder="¿En qué piensas?" className="col-span-9 placeholder-white search col-span-3 px-3 py-5 mt-1 outline-none text-white shadow bg-gray-100/50 rounded w-full" />
              </div>


              {/* BUTTONS */}
              <div className='grid  grid-cols-10'>
                <div className='col-span-1'></div>

                <div className='flex col-span-9 items-center justify-between'>

                  <div className='w-40 flex justify-between'>

                    

                  <Tooltip title={"Añadir imagen"} placement={"bottom"}>
                    <button >
                        <img src={icons.image} alt="Upload image" className="w-7 sm:w-6 rounded-full " />
                    </button>
                  </Tooltip>

                  <Tooltip title={"Emoticones"} placement={"bottom"}>
                    <button>
                        <img src={icons.emoji} alt="Emoticones" className="w-7 sm:w-6 rounded-full " />
                    </button>
                  </Tooltip>

                  <Tooltip title={"Añadir ubicacion"} placement={"bottom"}>
                    <button>
                        <img src={icons.pin} alt="Aniadir ubicacion" className="w-7 sm:w-6 rounded-full " />
                    </button>
                  </Tooltip>

    

                  </div>
    

                  <button className="self-center justify-self-end px-6 sm:px-5 py-1 shadow bg-gray-100/50 text-white rounded-full text-base sm:text-sm"> Publicar </button>

                </div>


              </div>

            </div>
            
            <hr className="mt-5 borde" />
            
            {/* <!--POSTS--> */}
            <div className="main__posts ">
              
              {projects.map( (p) =>  (<Post project={p} key={p.id} />  ))}
            </div>
            
          </div>
          
          {/* <!--MAIN ASIDE--> */}
          <div className="main-aside sm:h-100 h-full  flex flex-col sm:col-span-1 side__container sm:rounded-r-xl  pt-1 grid grid-rows-5  sm:grid-rows-6 ">
            {/* <!--MAIN ASIDE TOP--> */}
            <div className="side__container-top  row-span-3 sm:row-span-4 p-2 flex flex-col  ">
              
              
                <h4 className="text-center mb-3 sm:mb-0">Sugerencia de tecnologías</h4>

                
            
              {/* <!--SIDE CONTAINER SKILLS--> */}
              <div className={` relative side__container-skills flex flex-col text-xs h-100 sm:h-full items-left pt-2 overflow-y-auto`}>

                {Object.keys( skills ).map( (skill) => {
                  
                  return <Skill icon={icons[skill]} skill={ skill } follows={ follows }  cambiarFollows={ cambiarFollows } key={skills[skill]} />

                })}
                
              </div>

         

            </div>
            {/* <!--MAIN ASIDE BOTTOM--> */}
            <div className="side__container-bottom row-span-2 h-100   flex flex-col p-2 ">
              
                <h4 className="col-span-2 text-center">Último proyecto</h4>
            
              
              <div className="work p-2 bg-pink-300/50 h-full w-11/12 m-auto rounded-2xl">
                
              </div>

              <button className="justify-self-end  self-center px-2 py-1 rounded-full  hover:bg-indigo-100/50 hover:shadow text-white rounded">Ver todos</button>


            </div>
            {/*Espacio para el nav en mobile */}
          <div className='header_space '></div>
          </div>

          
        </div>
    </>
  )
}

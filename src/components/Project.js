import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Tooltip } from '@mui/material';

import { buscarProyecto } from '../helpers/functions';


import {Modalx} from './Modalx';
import { icons } from '../helpers/icons.json';
import { Likes } from './Likes';


export const Project = () => {

  const { id } = useParams();

  const project = buscarProyecto( id );
  

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className='about-me flex flex-col items-center sm:grid grid-cols-1 grid-rows-6 sm:grid-rows-12 w-full h-full overflow-y-auto sm:w-5/6 xl:w-2/3 flex sm:h-5/6 sm:rounded-2xl'>
      
      <Link to={`/`} className='flex items-center ml-6' ><img src={icons.arrowLeft} alt='Volver' className='w-8' /> Post</Link>
      
      <div className='w-100 col-span-1 row-span-4 sm:row-span-5 mx-auto flex flex-col items-start self-start xl:mt-3'>
          
         {/* <!--POST HEADER--> */}
         <div className="post__header grid grid-cols-3 ">
        
        <div	className="post__header-profile col-span-2  flex ">
        <img src={`${ icons.perfil }`} alt="Renzo Marangon" className="mr-2 rounded-full w-14 self-center drop-shadow-md shadow-lg border border-gray-700/5" />
        <p className="self-center ml-3 sm:w-40 font-bold text-base sm:text-sm ">Renzo Marangon</p>
        </div>       
        <div className="post__header-time flex items-center  justify-self-end sm:mr-2">
            <p>6 min.</p>

        </div>
    </div>
    
    {/* <!--POST MAIN--> */}
    <div className="post__main p-2 sm:p-4 " >

        <div  className={`relative w-100 h-80 col-span-2 sm:col-span-1 sm:row-span-1 w-full`}>

          

          <img className=' z-1 top-0 w-full h-80 mx-auto  object-cover-center rounded-3xl cursor-pointer' src={`${project.img}`} alt={`${project.title}`} />   

        </div>


    <Modalx  handleClose={ handleClose } open={ open } project = { project } />

    </div>
    
    {/* <!--POST FOOTER--> */}
    <div className=" post__footer ml-5 flex items-center justify-around w-3/6 sm:w-3/12 ">

    <Likes project = {project} />

    <Tooltip title="Comentar" placeholder='bottom' >
      <button><img className='w-7 sm:w-5' src={`${icons.message}`} alt='Comentar' /></button>
    </Tooltip>

    <Tooltip title="Compartir" placeholder='bottom' >
      <button><img className='w-7 sm:w-5 ' src={`${icons.share}`} alt='Compartir' /></button>
    </Tooltip>

    <Tooltip title="Guardar" placeholder='bottom' >
      <button><img className='w-6 sm:w-4' src={`${icons.bookmark}`} alt='Guardar' /></button>
    </Tooltip>

    </div>

      </div>
      
  </div>
  )
}

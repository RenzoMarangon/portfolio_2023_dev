import * as React from 'react';
import { useState } from 'react';
import { Tooltip } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import { CommentModal } from './CommentModal';
import { icons } from '../helpers/icons.json';
import { Likes } from './Likes';
import { PostMenu } from './PostMenu';
import { Link } from 'react-router-dom';
import JSAlert from 'js-alert';
import { guardarComentario, guardarProyectos } from '../helpers/firestore';
import { Guardado } from './Guardado';



export const Post = ({project}) => {


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const confirmacion = () =>
  {
    // Show a confirm alert
    JSAlert.confirm("¿Está seguro que quiere ir al sitio web del proyecto?").then(function(result) {

      // Check if pressed yes
      if (!result)
          return;
      
      // User pressed yes!
      window.open(project.site, '_blank'); ;

    });
  }


    const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {
        right: -2,
        top: 2,
        padding: '0 4px',
        fontSize:'11px'
      },
    }));

   
  return (
    <div className="post flex flex-col my-4 mx-2 mb-4 border-b border-gray-100/10 drop-shadow pb-5">
        {/* <!--POST HEADER--> */}
        <div className="post__header grid grid-cols-3  ">
        
            <div	className="post__header-profile col-span-2  flex ">
            <img src={`${ icons.perfil }`} alt="Renzo Marangon" className="mr-2 rounded-full w-14 self-center drop-shadow-md shadow-lg border border-gray-700/5" />
            <p className="self-center ml-3 sm:w-40 font-bold text-base sm:text-sm ">Renzo Marangon</p>
            </div>       
            <div className="post__header-time flex items-center  justify-self-end sm:mr-2">
                <p>6 min.</p>

            </div>
        </div>
        
        {/* <!--POST MAIN--> */}
        
          <div onClick={confirmacion} className="post__main p-2 sm:p-4 cursor-pointer" >

            
              <div  className={`relative w-100 h-80 col-span-2 sm:col-span-1 sm:row-span-1 w-full`}>

                

                <img className=' z-1 top-0 w-full h-80 mx-auto  object-cover-center rounded-3xl ' src={`${project.img}`} alt={`${project.title}`} />        

              </div>
            


          </div>
        
        {/* <!--POST FOOTER--> */}
        <div className=" post__footer ml-5 flex items-center justify-around w-3/6 sm:w-3/12 ">

        <Likes project = {project} />

        <Tooltip title="Comentar" placeholder='bottom' >
          <StyledBadge  badgeContent={Object.keys(project.comentarios).length} color="primary">
            <button onClick={ handleClickOpen }><img className='w-7 sm:w-5' src={`${icons.message}`} alt='Comentar' /></button>
          </StyledBadge>
        </Tooltip>

        <Guardado project={project} />

        </div>

        <CommentModal  handleClose={ handleClose } open={ open } project = { project } />

      
    </div>
  )
}

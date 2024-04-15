import React,{useContext, useEffect, useState} from 'react'
import { Tooltip } from '@mui/material';
import { icons } from '../helpers/icons.json';
import { guardarLikes, mostrarAlerta, obtenerUsuarioLocalStorage } from '../helpers/functions'
import { guardarLike } from '../helpers/firestore';
import { useStorex } from '../helpers/store';
import JSAlert from 'js-alert';
import { LikeModal } from './LikeModal';
import {  UseContextStore } from '../helpers/ContextStore';

export const Likes = ({project, setLikesCount, likesCount}) => {

    
    const { user, setUser } = useContext( UseContextStore );

    const [likes, setLikes ] = useState( useStorex().likes );

    const [ like, setLike] = useState(false);

    const [ icon, setIcon ] = useState( `${like ? icons.heartWhite : icons.heart}` );

    const [open, setOpen] = useState(false);


    const changeImg = (icon) => 
    {
        setIcon( icon )
    }
    
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };
    


    const cambiarLike = () => 
    {
        
        if(user !== null)
        {
            guardarLike( project, !like ).then(()=>{

                
    
                const newLikes = likes;
                newLikes[project.id] = !like;
    
                setLikes(newLikes);
    
            
                mostrarAlerta(project.title, !like, "likear");
                
    
                //Cambio el valor de 'like' en el proyecto actual
                project.likes[user.email] = !like;
    
                if(!like)
                {
                    setLikesCount( likesCount + 1 );
                }else{
                    setLikesCount( likesCount  - 1);
                }
            });

        }else{

            
            handleClickOpen(true)

        }


    }

    useEffect(()=>{
        
        if(user)
        {
            setLike(project.likes[user?.email] ? true : false);
        }
    },[])

    useEffect(()=>{
        like ? changeImg(icons.heartWhite) : changeImg(icons.heart);
    },[like])


  return (

    
    <div className='w-7 sm:w-5 flex' >
        <button onClick={cambiarLike}><img src={`${ icon }`} alt='Me gusta' /></button>
        <LikeModal  handleClose={ handleClose } open={ open } />
    </div>

  )
}

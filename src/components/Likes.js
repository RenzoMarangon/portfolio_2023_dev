import React,{useState} from 'react'
import { Tooltip } from '@mui/material';
import { icons } from '../helpers/icons.json';
import { guardarLikes, mostrarAlerta, obtenerLikes } from '../helpers/functions'
import { useStorex } from '../helpers/store';

export const Likes = ({proyect}) => {

    const [likes, setLikes ] = useState( useStorex().likes );

    const cambiarLikes = ( newLikes ) => { setLikes(newLikes) };

    const { guardarFollowsStore } = useStorex();

    const [ icon, setIcon ] = useState( `${likes[proyect.id] ? icons.heartWhite : icons.heart}` );

    const changeImg = (icon) => 
    {
        setIcon( icon )
    }

    const likear = ( ) => 
    {
    
        likes[proyect.id] = !likes[proyect.id];
        
        cambiarLikes(likes);
        guardarLikes(likes);
        guardarFollowsStore(likes);
        
        likes[proyect.id] ? changeImg(icons.heartWhite) : changeImg(icons.heart);


        mostrarAlerta(proyect.title, likes[proyect.id], "likear");


    }


  return (

    <div className='w-7 sm:w-5 flex' onClick={likear}>
        <Tooltip title="Me gusta" placeholder='bottom' >
            <button ><img   src={`${ icon }`} alt='Me gusta' /></button>
        </Tooltip>
    </div>

  )
}

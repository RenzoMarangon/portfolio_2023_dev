import React, { useState } from 'react'
import { Tooltip } from '@mui/material';


import { icons } from '../helpers/icons.json';
import { useStorex } from '../helpers/store';
import { guardarGuardados, mostrarAlerta } from '../helpers/functions';

export const Guardado = ({project}) => {

    const [guardados, setGuardados ] = useState( useStorex().guardados );

    const cambiarGuardados = ( newGuardados ) => { setGuardados(newGuardados) };


    const [ icon, setIcon ] = useState( `${guardados[project.id] ? icons.bookmarkWhite : icons.bookmark}` );

    const changeImg = (icon) => 
    {
        setIcon( icon )
    }

    const guardar = ( ) => 
    {
    
        guardados[project.id] = !guardados[project.id];
        
        cambiarGuardados(guardados);
        guardarGuardados(guardados);
        
        guardados[project.id] ? changeImg(icons.bookmarkWhite) : changeImg(icons.bookmark);


        mostrarAlerta(project.title, guardados[project.id], "guardar");


    }


  return (

    <div className='w-7 sm:w-5 flex' onClick={guardar}>
        <Tooltip title="Me gusta" placeholder='bottom' >
            <button ><img   src={`${ icon }`} alt='Guardar' /></button>
        </Tooltip>
    </div>
  )

}

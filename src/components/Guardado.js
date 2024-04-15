import React, { useContext, useEffect, useState } from 'react'
import { Tooltip } from '@mui/material';


import { icons } from '../helpers/icons.json';
import { useStorex } from '../helpers/store';
import { mostrarAlerta, obtenerUsuarioLocalStorage } from '../helpers/functions';
import { UseContextStore } from '../helpers/ContextStore';
import { guardarProyectoUsuario } from '../helpers/firestore';
import JSAlert from 'js-alert';

export const Guardado = ({project}) => {

    const { user, setUser, guardados, setGuardados } = useContext(UseContextStore);
    const [ icon, setIcon ] = useState(guardados[project.id] ? icons.bookmarkWhite : icons.bookmark);

    const changeImg = (state) =>{
        state === true ? setIcon(icons.bookmarkWhite) : setIcon( icons.bookmark);
    }

    const guardar = ( ) => 
    {
        if(user)
        {
            guardarProyectoUsuario(project, user, !guardados[project.id] ).then(()=>{
                mostrarAlerta(project.title,!guardados[project.id], "guardar" );
                guardados[project.id]=!guardados[project.id];
                changeImg(!guardados[project.id])
                setGuardados( guardados );
            })
        }
    }

  

  return (

    <div className='w-7 sm:w-5 flex' onClick={()=>{guardar()}}>
        <button ><img   src={`${ icon }`} alt='Guardar' /></button>
    </div>
  )

}

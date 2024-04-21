import React, { useContext, useEffect, useState } from 'react'

import { icons } from '../helpers/icons.json';
import { mostrarAlerta, obtenerUsuarioLocalStorage } from '../helpers/functions';
import { UseContextStore } from '../context/ContextStore';
import { guardarGuardadosFirestore, guardarProyectoUsuario } from '../helpers/firestore';
import { GuardadoModal } from './GuardadoModal';

export const Guardado = ({project, guardadosCount, setGuardadosCount}) => {

    const { user, setUser, guardados, setGuardados } = useContext(UseContextStore);

    const [ guardado, setGuardado ] = useState( guardados[project.id] === true ?  true : false);

    const [ icon, setIcon ] = useState(guardado ? icons.bookmarkWhite : icons.bookmark);

    const [open, setOpen] = useState(false);


    const changeImg = (state) =>{
        state === true ? setIcon(icons.bookmarkWhite) : setIcon( icons.bookmark);
    }

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };
    


    const guardar = ( ) => 
    {
        if(user !== null)
        {
            guardarGuardadosFirestore(project, !guardado ).then(()=>{
                

                const newGuardados = guardados;
                newGuardados[project.id ] = !guardado
                setGuardados( newGuardados );

                mostrarAlerta(project.title,!guardado, "guardar" );

                changeImg(guardado)

                !guardado ? setGuardadosCount( guardadosCount + 1) : setGuardadosCount( guardadosCount - 1); 
                
                setGuardado(!guardado)

                //Cambio el valor de 'like' en el proyecto actual
                project.guardados[user.email ] = !guardado;
            })
        }else{
            handleClickOpen(true)
        }
    }
  

    useEffect(()=>{
        
        if(user)
        {
            const seGuardoProyecto = project.guardados[user?.email];
            setGuardado( seGuardoProyecto ? true : false);

            changeImg(seGuardoProyecto);
        }
    },[])

 

  return (

    <div className='w-7 sm:w-5 flex' >
        <button onClick={()=>{guardar()}} ><img   src={`${ icon }`} alt='Guardar' /></button>
        <GuardadoModal handleClose={ handleClose } open={ open } />
    </div>
  )

}

import React, { createContext, useState } from 'react'
import { obtenerLikes, obtenerUsuarioLocalStorage } from '../helpers/functions';
import { obtenerUsuario } from '../helpers/auth';
import { proyectosLimpios } from '../helpers/proyects.json';


const UseContextStore = createContext();


const ContextStore = ({children}) => {

    const [ user, setUser ] = useState( obtenerUsuarioLocalStorage() );

    const [ likes, setLikes ] = useState( proyectosLimpios );

    const [ guardados, setGuardados ] = useState( proyectosLimpios );


    const contextValue = {
        user,
        setUser,
        likes,
        setLikes,
        guardados,
        setGuardados
    }

  return (
    <UseContextStore.Provider value={contextValue}>
        
        {children}

    </UseContextStore.Provider>
  )
}

export { ContextStore, UseContextStore }

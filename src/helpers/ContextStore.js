import React, { createContext, useState } from 'react'
import { obtenerLikes, obtenerUsuarioLocalStorage } from './functions';
import { obtenerUsuario } from './auth';
import { proyectosLimpios } from './proyects.json';


const UseContextStore = createContext();


const ContextStore = ({children}) => {

    const [ user, setUser ] = useState( obtenerUsuarioLocalStorage() );

    const [ likes, setLikes ] = useState( obtenerLikes() );

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

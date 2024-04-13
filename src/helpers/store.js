import { create } from 'zustand'
import { guardarGuardados, obtenerFollows, obtenerGuardados, obtenerLikes, obtenerRefScroll, obtenerUsuarioLocalStorage } from './functions'
import {  obtenerUsuario } from './auth'
import { obtenerProyectos } from './functions'

export const useStorex = create(() => ({
  
    follows : obtenerFollows(),
    likes : obtenerLikes(),
    usuario: obtenerUsuarioLocalStorage(),
    projects: obtenerProyectos(),
    guardados: obtenerGuardados(),

    guardarFollowsStore : () => ({ follows : obtenerFollows() }),
    guardarLikesStore : () =>({ likes : obtenerLikes() }),
    guardarUsuarioStore : () =>({ usuario : obtenerUsuarioLocalStorage() }),
    guardarProyectoStore : () =>({ usuario : obtenerProyectos() }),
    guardarGuardadosStore : ()=>({ guardados : obtenerGuardados()}),

}))
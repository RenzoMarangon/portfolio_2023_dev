import { create } from 'zustand'
import { guardarGuardados, obtenerFollows, obtenerGuardados, obtenerLikes, obtenerRefScroll, obtenerUsuarioLocalStorage } from './functions'
import {  obtenerUsuario } from './auth'
import { obtenerProyectos } from './functions'
import { obtenerGuardadosFireStore } from './firestore'

export const useStorex = create(() => ({
  
    follows : obtenerFollows(),
    likes : obtenerLikes(),
    usuario: obtenerUsuarioLocalStorage(),
    projects: obtenerProyectos(),

    guardarFollowsStore : () => ({ follows : obtenerFollows() }),
    guardarLikesStore : () =>({ likes : obtenerLikes() }),
    guardarUsuarioStore : () =>({ usuario : obtenerUsuarioLocalStorage() }),
    guardarProyectoStore : () =>({ usuario : obtenerProyectos() }),

}))


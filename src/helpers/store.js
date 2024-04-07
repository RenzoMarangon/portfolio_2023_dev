import { create } from 'zustand'
import { obtenerFollows, obtenerLikes } from './functions'
import {  obtenerUsuario } from './auth'

export const useStorex = create(() => ({
  
    follows : obtenerFollows(),
    likes : obtenerLikes(),
    usuario: obtenerUsuario(),

    guardarFollowsStore : () => ({ follows : obtenerFollows() }),
    guardarLikesStore : () =>({ likes : obtenerLikes() }),
    guardarUsuarioStore : () =>({ usuario : obtenerUsuario() })

}))
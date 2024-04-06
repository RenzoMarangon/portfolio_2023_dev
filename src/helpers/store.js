import { create } from 'zustand'
import { obtenerFollows, obtenerLikes } from './functions'

export const useStorex = create(() => ({
  
    follows : obtenerFollows(),
    likes : obtenerLikes(),

    guardarFollowsStore : () => ({ follows : obtenerFollows() }),
    guardarLikesStore : () =>({ likes : obtenerLikes() })

}))
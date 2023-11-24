import { create } from 'zustand'
import { obtenerFollows } from './functions'

export const useStorex = create(() => ({
  
    follows : obtenerFollows(),

    guardarStore : () => ({ follows:obtenerFollows() })

}))
import React, { useContext, useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';

import { guardarComentario, obtenerProyecto, obtenerProyectosFirebase } from '../helpers/firestore';

import '../styles/App.css';
import { useStorex } from '../helpers/store';
import { iniciarSesion, obtenerUsuario } from '../helpers/auth';
import { icons } from '../helpers/icons.json';
import { obtenerUsuarioLocalStorage } from '../helpers/functions';
import { UseContextStore } from '../context/ContextStore';

export const CommentModal = ({open, handleClose, project, setCommentsCount}) => {


    const { user, setUser } = useContext( UseContextStore);

    const [ proyecto, setProyecto ] = useState( project );
    
    const [ inputValue, setInputValue ] = useState({
        text:'',
    });


    const inputEnter = (e) => {
        const { name, value } = e.target;
        setInputValue({
          ...inputValue,
          [name]:value,
        })
      }


    const enviarForm = (e)=>{
        e.preventDefault();
        setInputValue({['text']:''})
        
        const comentario = { text: inputValue.text, id:uuidv4()}

        guardarComentario(proyecto, comentario).then(async()=>{
            const nuevoProyecto = await obtenerProyecto(proyecto);

            setProyecto(nuevoProyecto);
            
            obtenerProyectosFirebase();
            setCommentsCount( Object.keys(project.comentarios).length + 1 );
        })
    }

    const inicSesion = () =>
    {
      iniciarSesion( setUser );
      handleClose();
    }


    return (
      <>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          
        >
          <DialogTitle  id="alert-dialog-title ">
            <h2 className='font-bold'>Comentarios de {proyecto.title}</h2>
          </DialogTitle>
          <DialogContent className='modal overflow-y-auto'>

          <DialogContentText id="alert-dialog-description">
      

          {user !== null ?

            <>
            
            {/* { Object.keys(proyecto.comentarios).length === 0 && user !== null ? <p>No hay comentarios, ¡escribí el primero!</p> : <p>No hay comentarios, ¡registrate y escribí el primero!</p> }   */}


            <form className='mt-2  flex flex-col items-center ' onSubmit={enviarForm} >

            <div className='rounded-xl w-full h-20 border-2 p-2 flex items-start'>
            <img className='w-6 rounded' src={`${user.photoURL}`} />
            <textarea onChange={inputEnter} className='w-full outline-none pl-2  h-16 ' placeholder='Agregar un comentario' value={inputValue.text}  name="text" type='text' />
            </div>

            <button className='self-end mt-4 px-4 py-1 text-sm text-white bg-rose-400 rounded-full ' type='submit'>Enviar</button>

          </form>
            
            </>

            :
            <div className='flex  justify-center'>
              <button className='flex items-center rounded-full bg-light-gray pr-2' onClick={()=>{ inicSesion()}}> 
                <img src={icons.google} /> 

                <p className=' text-black text-sm'>Inicia sesión con Google para poder comentar</p>
              </button>
            </div>

          
          
          }
            
          {
           Object.keys(proyecto.comentarios).length !== 0 
                                                  && Object.keys(proyecto.comentarios).map( comentario => {
                                                    const {text, photoURL, displayName } = proyecto.comentarios[comentario]
                                                    return(
                                                        <div className='w-full mt-2 '>
                                                            <div className='flex items-center'>
                                                              <img className='m-1 w-12 p-2 rounded-full ' src={`${photoURL}`} alt={`${displayName}`} />
                                                              <p className='ml-1.5 font-bold'>{displayName}</p>
                                                            </div>
                                                            <p className='ml-16 pb-6'>{text}</p>

                                                            <hr />
                                                        </div>
                                                          )})
          }

            {
            }
          </DialogContentText>
          </DialogContent>
        </Dialog>
      </>
    );
  }
import React, { useContext } from 'react'
import { iniciarSesion } from '../helpers/auth';
import { UseContextStore } from '../context/ContextStore';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { icons } from '../helpers/icons.json';
import '../styles/App.css';

export const GuardadoModal = ({ open, handleClose }) => {
    const { setUser } = useContext(UseContextStore);

    const inicSesion= () => {

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
  
          <DialogContent className='modal overflow-y-auto relative'>


          <DialogTitle  id="alert-dialog-title">
            <h2 className='font-bold text-sm flex justify-center'>Inicia sesión para dar guardar el proyecto</h2>
          </DialogTitle>
            <DialogContentText id="alert-dialog-description">
                <button className='flex items-center m-auto rounded-full bg-light-gray pr-2' onClick={()=>{inicSesion()}}> 
                    <img src={icons.google} /> 
                    <p className=' text-black text-sm'>Inicia sesión con Google</p>
                </button>
       
            </DialogContentText>

          </DialogContent>
        </Dialog>
      </>
    );
}

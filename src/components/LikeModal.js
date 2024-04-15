import React, { useContext, useEffect, useRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import '../styles/App.css';
import { icons } from '../helpers/icons.json';
import { iniciarSesion } from '../helpers/auth';
import { useStorex } from '../helpers/store';
import { obtenerUsuarioLocalStorage } from '../helpers/functions';
import { DialogTitle } from '@mui/material';
import { UseContextStore } from '../helpers/ContextStore';

export const LikeModal = ({ open, handleClose }) => {


    const { user, setUser } = useContext(UseContextStore);

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
            <h2 className='font-bold text-sm flex justify-center'>Inicia sesión para dar like</h2>
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
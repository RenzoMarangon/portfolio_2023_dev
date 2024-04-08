import React, { useEffect, useState} from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { icons } from '../helpers/icons.json';
import { cerrarSesion, iniciarSesion } from '../helpers/auth';
import { useStorex } from '../helpers/store';
import { obtenerUsuarioLocalStorage } from '../helpers/functions';



export const ProfileMenu = ( ) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };


    const [ user, setUser] = useState( useStorex().usuario );



    const iniSesion = () =>
    {
        iniciarSesion(setUser);
        handleClose();
    }

    const cecSesion = () => 
    {
      cerrarSesion(setUser)
      handleClose();
    }

    useEffect(()=>{
      setUser(obtenerUsuarioLocalStorage());
    },[])


  return (

    <div className="col-span-1 w-10 mt-1  mr-2 rounded-full shadow bg-gray-100/50 flex self-center justify-self-center">
    <button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      
    >

        <img className='p-1 rounded-full 'src={`${user !== null ? user.photoURL : icons.user}`}  alt={`${user !== null ? user.displayName : 'Invitado' }`} />
        
    </button>

    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      className='ml-2 mt-1'
    >
    
    
      

    {user === null ? 
                                <MenuItem onClick={()=>{iniSesion()}} >Iniciar sesión</MenuItem>

                            : (
                                    <div>
                                        <MenuItem onClick={()=>{cecSesion()}} >Cerrar sesión</MenuItem>
                                    </div>
                               )
        }
  
    </Menu>
  </div>
  )
}
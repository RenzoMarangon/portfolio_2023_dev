import React, { useContext, useState} from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { icons } from '../helpers/icons.json';
import { cerrarSesion, iniciarSesion, obtenerUsuario } from '../helpers/auth';
import { proyectosLimpios } from '../helpers/proyects.json';
import { UseContextStore } from '../context/ContextStore';



export const ProfileMenu = ( ) => {
    const { user, setUser, setGuardados } = useContext( UseContextStore );


    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };


    const iniSesion = async() =>
    {
      iniciarSesion(setUser, setGuardados);

      handleClose();
    }

    const cecSesion = () => 
    {
      setGuardados( proyectosLimpios)
      cerrarSesion(setUser, setGuardados)
      setGuardados( proyectosLimpios)

      handleClose();
    }

  

  return (

    <div className="col-span-1 w-10 mt-1  mr-2 rounded-full shadow bg-gray-100/50 flex self-center justify-self-center">
    <button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      
    >
        <img className='p-1 rounded-full 'src={`${user === null ? icons.user : user.photoURL}`}  alt={`${user !== null ? user.displayName : 'Invitado' }`} />
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
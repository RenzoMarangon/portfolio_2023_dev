import React, { useState} from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { icons } from '../helpers/icons.json';


export const PostMenu = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

  return (

    <div>
    <button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      className={'w-5 sm:w-4 opacity-75 ml-2 hover:bg-gray-100/50 rounded-full p-0.5'}
    >
       <img className=''  src={ `${icons.dots_vertical }` } />
    </button>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      className='ml-1.5 mt-2'
    >
      <MenuItem onClick={handleClose} > Guardar Elemento </MenuItem>
  
    </Menu>
  </div>
  )
}

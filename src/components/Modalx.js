import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const Modalx = ({open, handleClose, proyect}) => {


  const { title,
    techs,
    description,
    site,
    img, } = proyect;

  return (
    <React.Fragment>
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src={img} alt={title} />
            <br></br>
            {description}
            <br></br>
            <br></br>
            <p>Tecnologías utilizadas: <b>{techs}</b></p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}>Cerrar</Button>

          <Button onClick={handleClose} autoFocus>
          <a href={site} target='_blank' >Ver demo</a>
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
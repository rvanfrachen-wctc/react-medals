import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

const NewCountry = (props) => {
  const { onAdd } = props;
  const [open, setOpen] = useState([]);
  const [name, setName] = useState([]);

  const handleOpen = () => {
    setOpen(true);
    setName("");
  }
  const handleClose = () => {
    setOpen(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(name);
    setOpen(false);
  }

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    setOpen(false);
    setName("");
  }, []);
  
  return (
    <React.Fragment>
      <Fab 
        onClick={ handleOpen }
        sx={{ position: 'fixed', bottom: '1em', right: '1em' }} 
        size="medium" 
        color="primary" 
        aria-label="add">
        <AddIcon />
      </Fab>
      <Dialog open={ open } onClose={ handleClose }>
        <form onSubmit={ (e) => handleSubmit(e) }>
          <DialogTitle id="form-dialog-title">Add Country</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a new country, enter the name
            </DialogContentText>
            <TextField
              onChange={ handleChange }
              autoFocus
              margin="dense"
              id="name"
              name="name"
              value={ name }
              label="Country Name"
              type="text"
              fullWidth
              autoComplete="off"
              autoCapitalize="off"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={ handleClose } color="secondary">
              Cancel
            </Button>
            <Button disabled={ name === "" ? true : false } type="submit" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
 
export default NewCountry;
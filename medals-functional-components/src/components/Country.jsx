import React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Medal from './Medal';
import DeleteIcon from '@mui/icons-material/Delete';

const Country = (props) => {
  const { country, medals, onAdd, onSub, onDelete } = props;

  const getMedalsTotal = (country, medals) => {
    let sum = 0;
    medals.forEach(medal => { sum += country[medal.name]; });
    return sum;
  }

  return (
    <Paper elevation={3} sx={{ width: 260, p: 1, m: 'auto', mt: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={10} sx={{ pt: 1, fontSize: 20, fontWeight: 'bold' }}>
          <Badge color="primary" badgeContent={ getMedalsTotal(country, medals) }>
            <Box sx={{ pr: 1 }}>{country.name}</Box>
          </Badge>
        </Grid>
        <Grid item xs={2}>
          <IconButton aria-label="delete" onClick={() => onDelete(country.id)} style={{ padding: 6 }}>
            <DeleteIcon fontSize="medium" />
          </IconButton>
        </Grid>
      </Grid>
      <Divider sx={{ m: 1 }} />
      { medals.map(medal => 
        <Medal 
          key={ medal.id } 
          country={ country } 
          medal={ medal } 
          onAdd={ onAdd } 
          onSub={ onSub } />
      )}
    </Paper>
  );
}
 
export default Country;
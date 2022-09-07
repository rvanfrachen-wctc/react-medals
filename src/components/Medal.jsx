import React from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlined from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import { Box } from '@mui/system';

const Medal = (props) => {
  const { country, medal, onAdd, onSub } = props;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar sx={{ mr: 0, color: 'black', bgcolor: medal.RGBColor }}>
        {country[medal.name]}
      </Avatar>
      <Box sx={{ pl: 1, mr: 'auto', textTransform: 'capitalize', }}>
        {medal.name} Medals
      </Box>
      <IconButton color='primary' onClick={() => onAdd(country.id, medal.name)}>
        <AddBoxOutlinedIcon fontSize='large' />
      </IconButton>
      <IconButton disabled={country[medal.name] === 0} color='error' onClick={() => onSub(country.id, medal.name)}>
        <IndeterminateCheckBoxOutlined fontSize='large' />
      </IconButton>
    </Box>
  );
}
 
export default Medal;
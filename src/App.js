import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect, useRef } from 'react';
import Badge from '@mui/material/Badge';
import { Box } from '@mui/system';
import './App.css';
import Country from './components/Country';
import NewCountry from './components/NewCountry';

const App = () => {
  const [countries, setCountries] = useState([]);
  const medals = useRef([
    { id: 1, name: 'gold', RGBColor: '#ffc107' },
      { id: 2, name: 'silver', RGBColor: '#c4cacc' },
      { id: 3, name: 'bronze', RGBColor: '#cd7f32' },
  ]);

  const handleAdd = (countryId, medalName) => {
    const idx = countries.findIndex(c => c.id === countryId);
    const mutableCountries = [...countries ];
    mutableCountries[idx][medalName] += 1;
    setCountries(mutableCountries);
  }
  
  const handleSub = (countryId, medalName) => {
    const idx = countries.findIndex(c => c.id === countryId);
    const mutableCountries = [...countries ];
    mutableCountries[idx][medalName] -= 1;
    setCountries(mutableCountries);  }
  
  const getAllMedalsTotal = () => {
    let sum = 0;
    medals.current.forEach(medal => { sum += countries.reduce((a, b) => a + b[medal.name], 0); });
    return sum;
  }

  const handleAddCountry = (name) => {
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    setCountries([...countries].concat({ id: id, name: name, gold: 0, silver: 0, bronze: 0 }));
  }
  const handleDelete = (countryId) => {
    setCountries([...countries].filter(c => c.id !== countryId));
  }

  useEffect(() => {
    let countries = [
      { id: 1, name: 'United States', gold: 2, silver: 2, bronze: 3 },
      { id: 2, name: 'China', gold: 3, silver: 1, bronze: 0 },
      { id: 3, name: 'Germany', gold: 0, silver: 2, bronze: 2 },
    ]
    setCountries(countries);
  }, []);

  return (
    <React.Fragment>
      <Box sx={{ textAlign: 'center', m: 0, bgcolor: '#BBBBF1', position: 'fixed', width: '100%', pt: '15px', pb: '10px', zIndex: '1000', opacity: '.95' }}>
        <Badge 
          sx={{ fontSize: '2.0em' }}
          badgeContent={ getAllMedalsTotal() } 
          color='primary'>
          <Box sx={{ pr: '8px' }}>Olympic Medals</Box>
        </Badge>
      </Box>
      <Container sx={{ pt: '80px', pb: '20px' }}>
        <NewCountry onAdd={ handleAddCountry } />
        <Grid container spacing={1} justifyContent='center'>
          {countries.map(country => 
            <Country
              key={country.id}
              country={country}
              medals={medals.current}
              onDelete={ handleDelete }
              onAdd={handleAdd}
              onSub = {handleSub}
            />
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;

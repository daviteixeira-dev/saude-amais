import React from 'react';
import Button from '@mui/material/Button';

function FormButton(type) {

  return (
    <Button sx={{ width: '100%', marginTop: 2, marginBottom: 4 }} type={type} variant="contained">Cadastrar</Button>
  );
}

export default FormButton;
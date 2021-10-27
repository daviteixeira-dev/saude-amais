import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function FormButton() {
  return (
    <Stack spacing={3} direction="row">
      <Button variant="contained">Cadastrar</Button>
    </Stack>
  );
}

export default FormButton;
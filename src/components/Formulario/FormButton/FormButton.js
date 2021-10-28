import React from 'react';

import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";

function FormButton() {

  return (
    /* <div className={classes.root}>*/
    <Stack spacing="3" justifyContent="center" width="40ch">

      <Button variant="contained" fullWidth size="large" className="mb-3 mb-mb-4 mt-4">Cadastrar</Button>
    </Stack>
  );
}

export default FormButton;
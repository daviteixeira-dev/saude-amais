/* React imports */
import React from "react";

/* Imports of UI material components */
import {
  Box,
  Grid,
  TextField,
  Typography
} from "@mui/material";


import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';

function Calendar(){
  const [value, setValue] = React.useState(null);

  return (
    <Box component="section" border="1px solid #000">
      <Typography variant="h5" ml={2}>
          Agenda de Mentorias
      </Typography>
      <Grid container justifyContent="center">
        <Grid item my={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label="Selecione a data"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Calendar
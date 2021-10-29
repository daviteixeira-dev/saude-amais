import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui//lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";

export default function SelectDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Data de Nascimento"
        /*maxlength="14"*/
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} fullWidth variant="filled" />}
      />
    </LocalizationProvider>
  );
}
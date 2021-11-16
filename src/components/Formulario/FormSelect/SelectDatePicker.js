import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";
import { Stack } from "@mui/material";

export default function SelectDatePicker({ props }) {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Data de Nascimento"
        inputFormat="dd/MM/yyyy"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField required value={props} fullWidth {...params} variant="filled" />}
      />
    </LocalizationProvider>
  );
}

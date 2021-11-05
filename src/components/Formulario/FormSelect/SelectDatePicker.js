import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";
import { Stack } from "@mui/material";

export default function SelectDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <Stack direction="column" width="100%">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Data de Nascimento"
          /*maxlength="14"*/
          value={value}
          required
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField required fullWidth {...params} variant="filled" />}
        />
      </LocalizationProvider>
    </Stack>
  );
}

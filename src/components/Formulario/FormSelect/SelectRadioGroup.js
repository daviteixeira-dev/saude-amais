import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SelectRadioGroup() {
  return (
    <FormControl component="fieldset" variant="filled" sx={{ m: 1, minWidth: "40ch" }}>
      <FormLabel component="legend" variant="filled">Gênero</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="female" control={<Radio />} label="Feminino" />
        <FormControlLabel value="male" control={<Radio />} label="Masculino" />
        <FormControlLabel variant="filled" value="other" control={<Radio />} label="Outro" />
      </RadioGroup>
    </FormControl>
  );
}
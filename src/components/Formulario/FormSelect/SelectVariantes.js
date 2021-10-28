import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectVariants() {
  const [uf, setUf] = React.useState('');

  const handleChange = (event) => {
    setUf(event.target.value);
  };

  return (

    <FormControl variant="filled" sx={{ m: 1, width: "100%"}}>
        <InputLabel id="demo-simple-select-filled-label">UF</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="uf"
          value={uf}
          onChange={handleChange}
          label="UF"
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

  );
}

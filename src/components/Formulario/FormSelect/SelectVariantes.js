import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectVariants() {
  const [uf, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (

    <FormControl sx={{ m: 1, width: '25ch' }}>
      <InputLabel id="uf">UF</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="uf"
        value={uf}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>1</MenuItem>
        <MenuItem value={20}>2</MenuItem>
        <MenuItem value={30}>3</MenuItem>
      </Select>
    </FormControl>

  );
}

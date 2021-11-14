import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectVariants( value, onChange, id) {
  const [uf, setUF] = React.useState('');

  const handleChange = (event) => {
    setUF(event.target.value);
  };

  return (

    <FormControl fullWidth variant="filled" required >
      <InputLabel id="uf">Estado</InputLabel>
      <Select
        labelId="Estado"
        id={id}
        value={value}
        onChange={onChange}
      >
        <MenuItem value={10}>Ceará</MenuItem>
        <MenuItem value={20}>Maranhão</MenuItem>
        <MenuItem value={30}>Pernambuco</MenuItem>
        <MenuItem value={40}>Piauí</MenuItem>
        <MenuItem value={50}>Paraná</MenuItem>
        <MenuItem value={60}>Santa Catarina</MenuItem>
        <MenuItem value={70}>Rio Grande do Sul</MenuItem>
        <MenuItem value={80}>Rio de Janeiro</MenuItem>
        <MenuItem value={90}>Minas Gerais</MenuItem>
        <MenuItem value={100}>São Paulo</MenuItem>
        <MenuItem value={110}>Goiás</MenuItem>
        <MenuItem value={120}>Rio Grande do Norte</MenuItem>
        <MenuItem value={130}>Espírito Santo</MenuItem>
        <MenuItem value={140}>Alagoas</MenuItem>
        <MenuItem value={150}>Paraíba</MenuItem>
        <MenuItem value={160}>Bahia</MenuItem>
        <MenuItem value={170}>Mato Grosso</MenuItem>
        <MenuItem value={180}>Mato Grosso do Sul</MenuItem>
        <MenuItem value={190}>Rondônia</MenuItem>
        <MenuItem value={200}>Roraima</MenuItem>
        <MenuItem value={210}>Amazonas</MenuItem>
        <MenuItem value={220}>Distrito Federal</MenuItem>
        <MenuItem value={230}>Tocantins</MenuItem>
      </Select>
    </FormControl>
  );
}


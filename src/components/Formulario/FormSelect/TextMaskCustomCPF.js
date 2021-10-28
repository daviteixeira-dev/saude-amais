import * as React from "react";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import Box from '@mui/material/Box';
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      required
      {...other}
      mask="#00.000.000-00"
      definitions={{
        '#': /[0-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


/* FormattedInputs */
export default function TextMaskCustomCPF() {
  const [values, setValues] = React.useState({
    textmask:'',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <FormControl fullWidth variant="filled" sx={{ m: 1,}} >
      <InputLabel htmlFor="formatted-text-mask-input">CPF</InputLabel>
      <Input
        value={values.textmask}
        onChange={handleChange}
        name="textmask"
        id="cpf"
        inputComponent={TextMaskCustom}
      />
    </FormControl>
  );
}
import * as React from "react";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';
import { FilledInput } from "@mui/material";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {

  const { onChange, ...other } = props;
  return (
    <IMaskInput
      required
      {...other}
      mask="#0000-000"
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
export default function TextMaskCustomCEP() {

  function onBlurCep(event) {
    const {value} = event.target;
      const cepValue = value.replace(/[-]/g, '');

      if(cepValue.length !== 8) {
        return
      }


      fetch(`https://viacep.com.br/ws/${value}/json/`)
        .then((res) => res.json())
        .then((data) => console.log(data));
  }

  const [values, setValues] = React.useState({
    textmask: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };



  return (
    <FormControl variant="filled" fullWidth required >
      <InputLabel htmlFor="component-filled">CEP</InputLabel>
      <FilledInput
        fullWidth
        onBlur={(event) => onBlurCep(event)}
        value={values.textmask}
        onChange={handleChange}
        name="textmask"
        id="component-filled"
        inputComponent={TextMaskCustom}
      />
    </FormControl>
  );
}



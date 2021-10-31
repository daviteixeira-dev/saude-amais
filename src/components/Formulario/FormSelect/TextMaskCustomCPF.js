import * as React from "react";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';
import { FilledInput } from "@mui/material";
import { Stack } from '@mui/material';


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
    textmask: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (

    <Stack spacing={2} mt={1} direction="column" width='29ch'>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">CPF</InputLabel>
        <FilledInput

          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="component-filled"
          inputComponent={TextMaskCustom}
        />

      </FormControl>
    </Stack>

  );
}



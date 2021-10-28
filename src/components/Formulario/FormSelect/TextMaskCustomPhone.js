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
      mask="(#0) 000-000000"
      definitions={{
        '#': /[1-9]/,
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
export default function TextMaskCustomPhone() {
  const [values, setValues] = React.useState({
    textmask: '(00) 000-000000',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
        },
      }}
    >
      <FormControl variant="filled" sx={{ m: 1, minWidth: "40ch" }}>
        <InputLabel htmlFor="formatted-text-mask-input">Telefone</InputLabel>
        <Input
          variant="filled"
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="fone"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
    </Box>
  );
}
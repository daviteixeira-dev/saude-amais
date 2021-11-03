import React from "react";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import image09 from "../../../images/9.jpg";

const useStyles = makeStyles(({ theme }) => ({
  root: {
    alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center",
    display: 'flex',
    '& > *': {

    },
  },
  input: {
    display: "none",
  },
  large: {

  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Stack direction="row" alignItems="center" fullWidth>
      <div className={classes.root}>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <Avatar src={image09} className={classes.large} sx={{ width: 90, height: 90 }} />
          </IconButton>
        </label>
      </div>
    </Stack>
  );
}
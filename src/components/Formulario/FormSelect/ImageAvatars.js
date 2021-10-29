import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="../../../images/teacher_pilates_01.jpg" sx={{ width: 70, height: 70 }} />
    </Stack>
  );
}
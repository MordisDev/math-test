"use client";

import { TextField, type TextFieldProps } from "@mui/material";

export const Input = ({ ...properties }: TextFieldProps) => {
  return (
    <TextField
      {...properties}
      type="text"
      InputLabelProps={{
        shrink: true,
      }}
      margin="dense"
      fullWidth
    />
  );
};

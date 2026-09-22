import React from "react";
import MUITextField from "@mui/material/TextField";

export function TextField({ className, variant = "outlined", ...props }) {
  return <MUITextField variant={variant} className={className} {...props} />;
}

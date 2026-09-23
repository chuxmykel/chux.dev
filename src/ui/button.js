import React from "react";
import MUIButton from "@mui/material/Button";

export function Button({ className, variant = "outlined", ...props }) {
  return <MUIButton variant={variant} className={className} {...props} />;
}

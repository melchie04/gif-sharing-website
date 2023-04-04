import { createTheme } from "@mui/material";

const colors = {
  primary: "#e474e4",
  secondary: "#e74f82",
  body_bg: "#0f0c24",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.body_bg,
    },
  },
});

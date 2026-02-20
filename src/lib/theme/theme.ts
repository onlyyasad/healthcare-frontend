import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1586fd",
    },
    secondary: {
      main: "#666f73",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
            padding: "8px 24px",
        }
      }
    },
    MuiContainer: {
        defaultProps: {
            maxWidth: "lg",
        }
    }
  },
});

import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...{
            padding: theme.spacing(2),
            borderWidth: "1.5px",
            color: "#fff"
          },
        }),
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  palette: {
    primary: {
      main: "#007bff", // Set the main color for primary buttons to blue
    },
    secondary: {
      main: "#ff0000", // Set the main color for secondary buttons to red
    },
    background: {
      default: "#111", // Set the default background color to black
      paper: "#222", // Set the background color for paper components to white
      secondary: "#222", // Set the background color for secondary elements to dark gray
      action: "#007bff", // Set the background color for interactive elements to blue
      error: "#ff0000",
    },
    text: {
      primary: "#f2f2f2", // Set the primary text color to white
      secondary: "#f5f5f5",
      disabled: "#fff", // Set the text color for disabled elements to gray
      hint: "#ccc", // Set the text color for hint or placeholder text to light gray
      icon: "#fff", // Set the text color for icon elements to dark gray
      error: "#ff0000", // Set 
    },
  },
});

export default theme;

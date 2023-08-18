import { createTheme } from '@mui/material/styles';

const Light = createTheme({
  palette: {
    type: 'light', // Set the theme type to light
    primary: {
      main: '#2196f3', // Primary color for buttons, links, etc.
    },
    secondary: {
      main: '#ff9800', // Secondary color for accents
    },
    error: {
      main: '#f44336', // Error color
    },
    warning: {
      main: '#ffeb3b', // Warning color
    },
    info: {
      main: '#00bcd4', // Info color
    },
    success: {
      main: '#4caf50', // Success color
    },
    background: {
      default: '#ffffff', // Light background color
    },
    text: {
      primary: '#333333', // Primary text color
      secondary: '#666666', // Secondary text color
    },
    // Customize other palette properties as needed
  },
  // Customize other theme configurations as needed
});

export default Light;

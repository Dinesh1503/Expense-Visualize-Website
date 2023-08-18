import { createTheme } from '@mui/material/styles';

const Dark = createTheme({
  palette: {
    type: 'dark',
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
    body: {
      default: '#050c1f', // Very dark blue background color
    },
    text: {
      primary: '#ffffff', // Primary text color
      secondary: '#cccccc', // Secondary text color
    },
    // Customize other palette properties as needed
  },
  // Customize other theme configurations as needed
});

export default Dark;

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#000000' },
    white: { main: '#fff' },
    text: { primary: '#000' },
    secondary: { main: '#2c2c2c' },
    background: { default: '#f5f5f5' },
  },
});

export { ThemeProvider, theme };

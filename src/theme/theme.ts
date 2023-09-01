import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 0 ? 'dark' : 'light',
  },
});

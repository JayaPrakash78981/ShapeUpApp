import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue for primary
    },
    secondary: {
      main: '#f48fb1', // Pink for secondary
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e', // Slightly lighter for cards
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Remove default gradient
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.2)',
    '0px 4px 8px rgba(0,0,0,0.2)',
    '0px 6px 12px rgba(0,0,0,0.2)',
    '0px 8px 16px rgba(0,0,0,0.2)',
    '0px 10px 20px rgba(0,0,0,0.2)',
    '0px 12px 24px rgba(0,0,0,0.2)',
    '0px 14px 28px rgba(0,0,0,0.2)',
    '0px 16px 32px rgba(0,0,0,0.2)',
    '0px 18px 36px rgba(0,0,0,0.2)',
    '0px 20px 40px rgba(0,0,0,0.2)',
    '0px 22px 44px rgba(0,0,0,0.2)',
    '0px 24px 48px rgba(0,0,0,0.2)',
    '0px 26px 52px rgba(0,0,0,0.2)',
    '0px 28px 56px rgba(0,0,0,0.2)',
    '0px 30px 60px rgba(0,0,0,0.2)',
    '0px 32px 64px rgba(0,0,0,0.2)',
    '0px 34px 68px rgba(0,0,0,0.2)',
    '0px 36px 72px rgba(0,0,0,0.2)',
    '0px 38px 76px rgba(0,0,0,0.2)',
    '0px 40px 80px rgba(0,0,0,0.2)',
    '0px 42px 84px rgba(0,0,0,0.2)',
    '0px 44px 88px rgba(0,0,0,0.2)',
    '0px 46px 92px rgba(0,0,0,0.2)',
    '0px 48px 96px rgba(0,0,0,0.2)',
  ],
});

export default theme;

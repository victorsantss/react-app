import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link, useColorScheme } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

export function Header() {
  const pathname = window.location.pathname;
  const { mode, setMode } = useColorScheme();

  function handleToggleTheme() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Pesquisa de Funcionários
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Link
              href='/'
              color='inherit'
              underline={pathname === '/' ? 'always' : 'hover'}
            >
              Início
            </Link>
            <Link
              href='/funcionarios'
              color='inherit'
              underline={pathname === '/funcionarios' ? 'always' : 'hover'}
            >
              Funcionários
            </Link>
            <IconButton onClick={handleToggleTheme} aria-label="themeSwitch" color='inherit'>
              {mode === 'light' ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

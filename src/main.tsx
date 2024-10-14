import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme} defaultMode='light'>
    <CssBaseline />
    <App />
  </ThemeProvider>
)

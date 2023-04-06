import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import '@/styles/_fonts.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
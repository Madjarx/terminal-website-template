import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { terminalTheme } from './theme.ts'
import { ColorModeScript } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={terminalTheme.config.initialColorMode} />
    <ChakraProvider theme={terminalTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

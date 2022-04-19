import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { ChakraProvider } from '@chakra-ui/react'
import { App } from './App'
import theme from "./theme";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)

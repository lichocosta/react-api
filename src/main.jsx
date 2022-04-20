import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { ChakraProvider } from '@chakra-ui/react'
import { App } from './App'
import theme from "./theme";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
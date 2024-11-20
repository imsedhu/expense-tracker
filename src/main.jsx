import theme from "./theme";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./context/Context.jsx";

createRoot(document.getElementById('root')).render(
  <GlobalState>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </GlobalState>
)

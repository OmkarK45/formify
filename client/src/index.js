import React from "react"
import ReactDOM from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { Helmet, HelmetProvider } from "react-helmet-async"

import theme from "./theme"
import "./index.css"
import App from "./App"

const queryClient = new QueryClient()

ReactDOM.render(
  <HelmetProvider>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>
    </ChakraProvider>
  </HelmetProvider>,
  document.getElementById("root")
)

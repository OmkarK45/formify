import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme/theme";
import "./index.css";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);

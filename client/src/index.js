import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme/theme";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);

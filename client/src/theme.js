import { theme, extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

export default extendTheme({
  ...theme,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.50", "gray.900")(props),
      },
    }),
  },
  colors: {
    ...theme.colors,
    red: {
      50: "#ffe2ea",
      100: "#ffb2c4",
      200: "#ff7f9d",
      300: "#fd4e75",
      400: "#fc1d4e",
      500: "#e20334",
      600: "#b10029",
      700: "#7f001c",
      800: "#4e000f",
      900: "#200005",
    },
    green: {
      50: "#e2fbed",
      100: "#c2ebd4",
      200: "#9fddb9",
      300: "#7ccf9e",
      400: "#58c184",
      500: "#3ea76a",
      600: "#2e8251",
      700: "#1f5d3a",
      800: "#0f3921",
      900: "#001506",
    },
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, system-ui, sans-serif",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "400",
        boxShadow: "base",
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: "-0.1rem",
      },
    },
    Code: {
      baseStyle: {
        fontFamily: "monospace",
        boxShadow: "base",
      },
    },
  },
})

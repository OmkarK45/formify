import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      blue: "#725AD3",
      green: "#38A389",
      lightGreen: "#48CFAD",
      carbon: "#323232",
    },
    background: "#F8F8F8",
    other: {
      danger: "#EA2121",
      warning: "#FAC600",
      info: "#44D6E9",
      success: "#38A389",
      gradientStart: "#4CB8C4",
      gradientEnd: "#3CD3AD",
    },
    text: {
      heading: "#1B0760",
      body: "#918CA4",
    },
  },
  fonts: {
    body: "Inter",
    heading: "Inter Bold",
  },
});

export default theme;

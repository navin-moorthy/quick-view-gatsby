import { theme as chakraTheme } from "@chakra-ui/core"

const colors = {
  ...chakraTheme.colors,
  blue: {
    ...chakraTheme.colors.blue,
    50: "#dcf7ff",
    100: "#b4e3fb",
    200: "#8acff2",
    300: "#5ebbeb",
    400: "#34a8e5",
    500: "#1B91CF",
    600: "#0d6f9f",
    700: "#024f73",
    800: "#003048",
    900: "#00121e",
  },
}

const font =
  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
const fonts = {
  ...chakraTheme.fonts,
  body: font,
  heading: font,
}

const sizes = {
  ...chakraTheme.sizes,
  vw: "100vw",
  vh: "100vh",
}

const theme = {
  ...chakraTheme,
  colors,
  fonts,
  sizes,
  buttons: {
    primary: {
      color: colors.white,
      backgroundColor: colors.blue,
    },
    secondary: {
      color: colors.white,
      backgroundColor: colors.green,
    },
    danger: {
      color: colors.white,
      backgroundColor: colors.red,
    },
  },
}
/**
 * Brand theme Usage
 * blue.500: {
 *   Primary Button,
 * }
 */

export default theme

import { theme as chakraTheme } from "@chakra-ui/core"

const theme = {
  ...chakraTheme,
  colors: {
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
  },
  sizes: {
    ...chakraTheme.sizes,
    vw: "100vw",
    vh: "100vh",
  },
}

/**
 * Brand theme Usage
 * blue.500: {
 *   Primary Button,
 * }
 */

export default theme

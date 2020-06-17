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
  gray: {
    ...chakraTheme.colors.gray,
    50: "#F4F5F5",
  },
  blackAlpha: {
    ...chakraTheme.colors.blackAlpha,
    600: "#5D5E5E",
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

const buttons = {
  base: {
    height: "38px",
    paddingY: "8px",
    paddingX: "0px",
    fontSize: "sm",
    fontWeight: "500",
    lineHeight: "22px",
    letterSpacing: "-0.12px",
    borderRadius: "6px",
  },
}

const theme = {
  ...chakraTheme,
  colors,
  fonts,
  sizes,
  buttons,
}
/**
 * Brand theme Usage
 * blue.500: {
 *   Primary Solid Button,
 * }
 * gray.50: {
 *  Secondary Solid Button
 * }
 * blackAlpha.600 {
 *  Seconddary Solid Button Text
 * }
 */

export default theme

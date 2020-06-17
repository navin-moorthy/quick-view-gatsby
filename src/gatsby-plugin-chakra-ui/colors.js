import { theme as chakraTheme } from "@chakra-ui/core"

export const colors = {
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
    400: "#8C8D8E",
  },
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
 *  Secondary Solid Button Text
 * }
 * blackAlpha.400 {
 *  Transparent Unstyled IconButton Text
 * }
 */

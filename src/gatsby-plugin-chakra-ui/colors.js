import { theme as chakraTheme } from "@chakra-ui/core"

export const colors = {
  ...chakraTheme.colors,
  blue: {
    ...chakraTheme.colors.blue,
    50: "#e6f6ff",
    100: "#b4e3fb",
    200: "#8acff2",
    300: "#5ebbeb",
    400: "#34a8e5",
    500: "#1b91cf",
    600: "#0d6f9f",
    700: "#024f73",
    800: "#003048",
    900: "#00121e",
  },
  gray: {
    ...chakraTheme.colors.gray,
    50: "#f4f5f5",
  },
  blackAlpha: {
    ...chakraTheme.colors.blackAlpha,
    300: "#afb0b1",
    400: "#8c8d8e",
    600: "#5d5e5e",
    800: "#282929",
  },
  green: {
    ...chakraTheme.colors.green,
    400: "#5fb87d",
  },
}

/**
 * Brand theme Usage
 * blue.500: {
 *   Primary Solid Button,
 * }
 * blue.50: {
 *  Primary Ghost Button
 * }
 * gray.50: {
 *  Secondary Solid Button
 * }
 * blackAlpha.600 {
 *  Secondary Solid Button Text
 * }
 * blackAlpha.400 {
 *  Transparent Unstyled IconButton Text
 *  Text sm
 * }
 * blackAlpha.300 {
 *  Text xs
 * }
 * blackAlpha.800 {
 *  Heading h4
 * }
 * green.400 {
 *  Alert Success
 * }
 */

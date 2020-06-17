import { theme as chakraTheme } from "@chakra-ui/core"

const theme = {
  ...chakraTheme,
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

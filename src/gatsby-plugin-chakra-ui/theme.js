import { theme as chakraTheme } from "@chakra-ui/core"

const theme = {
  ...chakraTheme,
  sizes: {
    ...chakraTheme.sizes,
    vw: "100vw",
    vh: "100vh",
  },
}

export default theme

import { theme as chakraTheme } from "@chakra-ui/core"
import { icons, colors, buttons, texts, headings } from "."

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
  buttons,
  icons,
  texts,
  headings,
}

export default theme

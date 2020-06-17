import React from "react"
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
    400: "#8C8D8E",
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

const baseButtonStyles = {
  height: "38px",
  paddingY: "8px",
  paddingX: "0px",
  fontSize: "sm",
  fontWeight: "500",
  lineHeight: "22px",
  letterSpacing: "-0.12px",
  borderRadius: "6px",
}
const buttons = {
  unstyled: {
    variant: "unstyled",
    color: "blackAlpha.400",
    display: "inline-flex",
    height: "20px",
    minW: "20px",
  },
  base: baseButtonStyles,
  primarySolid: {
    ...baseButtonStyles,
    variantStyles: "base",
    variantColor: "blue",
  },
  secondarySolid: {
    ...baseButtonStyles,
    variantStyles: "base",
    background: "gray.50",
    color: "blackAlpha.600",
  },
}

const icons = {
  ...chakraTheme.icons,
  phone: {
    path: (
      <path
        fill="currentColor"
        d="M3.06 2.3a.08.08 0 00-.13-.01l-.4.42c-.4.42-.5 1-.26 1.47.18.36.4.77.65 1.21l1.24-1.22a.08.08 0 000-.1L3.07 2.3zm.68 4.4l1.47-1.47c.53-.52.62-1.33.23-1.96L4.34 1.5c-.56-.87-1.78-1-2.49-.25l-.4.42C.65 2.5.38 3.77.92 4.85a19.2 19.2 0 003.23 4.71 21.13 21.13 0 004.96 3.52c1 .53 2.18.37 3.04-.29l.42-.32c.84-.65.81-1.93-.05-2.55l-1.76-1.25a1.58 1.58 0 00-1.93.08l-1.66 1.39A14.58 14.58 0 015.22 8.5 13.75 13.75 0 013.74 6.7zM8.48 11c.49.3.95.55 1.33.75.44.23 1 .18 1.42-.15l.42-.32a.08.08 0 000-.13L9.89 9.9a.08.08 0 00-.1 0L8.5 11z"
      />
    ),
    viewBox: "0 0 14 14",
  },
  "arrow-back": {
    path: (
      <>
        <path
          fill="currentColor"
          d="M8.7.3a1 1 0 010 1.4L2.42 8l6.3 6.3a1 1 0 11-1.42 1.4l-7-7a1 1 0 010-1.4l7-7a1 1 0 011.42 0z"
        />
        <path
          fill="currentColor"
          d="M0 8a1 1 0 011-1h16a1 1 0 110 2H1a1 1 0 01-1-1z"
        />
      </>
    ),
    viewBox: "0 0 18 16",
  },
  share: {
    path: (
      <>
        <path
          fill="currentColor"
          d="M1.4 8.72c.41 0 .75.34.75.75v5.84a.94.94 0 00.94.94h10.17a.94.94 0 00.94-.94h1.5a2.44 2.44 0 01-2.44 2.44H3.09a2.44 2.44 0 01-2.44-2.44V9.47c0-.41.34-.75.75-.75zm13.55 6.59h.75V9.47a.75.75 0 10-1.5 0v5.84h.75zM7.65.47c.29-.3.76-.3 1.06 0l3.38 3.39a.75.75 0 11-1.06 1.06L8.18 2.06 5.32 4.92a.75.75 0 01-1.06-1.06L7.65.47z"
        />
        <path
          fill="currentColor"
          d="M8.18.25c.41 0 .75.34.75.75v11.01a.75.75 0 01-1.5 0V1c0-.41.33-.75.75-.75z"
        />
      </>
    ),
    viewBox: "0 0 16 18",
  },
}

const theme = {
  ...chakraTheme,
  colors,
  fonts,
  sizes,
  buttons,
  icons,
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

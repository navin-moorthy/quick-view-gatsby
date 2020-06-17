import React from "react"
import { theme as chakraTheme } from "@chakra-ui/core"

export const icons = {
  ...chakraTheme.icons,
  phone: {
    path: (
      <path
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.3 11l2.01-1.67a.83.83 0 011.02-.04l1.75 1.24c.46.33.47 1 .03 1.34l-.42.33c-.64.5-1.5.6-2.23.22A20.4 20.4 0 014.7 9.04a18.46 18.46 0 01-3.1-4.53c-.38-.77-.2-1.7.4-2.32l.4-.42a.83.83 0 011.3.13L4.8 3.67c.21.33.16.76-.12 1.03L2.7 6.67"
      />
    ),
    viewBox: "0 0 14 14",
  },
  "arrow-back": {
    path: (
      <>
        <path
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 1L1 8l7 7M17 8H1"
        />
      </>
    ),
    viewBox: "0 0 18 16",
  },
  share: {
    path: (
      <path
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.4 9.47v5.84A1.7 1.7 0 003.1 17h10.16a1.7 1.7 0 001.7-1.7V9.48M11.56 4.39L8.18 1l-3.4 3.39M8.18 1v11.01"
      />
    ),
    viewBox: "0 0 16 18",
  },
}

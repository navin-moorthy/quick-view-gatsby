import React, { forwardRef } from "react"
import { Heading as ChakraHeading, useTheme } from "@chakra-ui/core"

export const Heading = forwardRef(({ variantStyles, ...props }, ref) => {
  const { headings } = useTheme()

  return <ChakraHeading ref={ref} {...headings[variantStyles]} {...props} />
})

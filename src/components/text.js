import React, { forwardRef } from "react"
import { Text as ChakraText, useTheme } from "@chakra-ui/core"

export const Text = forwardRef(({ variantStyles, ...props }, ref) => {
  const { texts } = useTheme()

  return <ChakraText ref={ref} {...texts[variantStyles]} {...props} />
})

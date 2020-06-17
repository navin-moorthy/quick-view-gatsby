import React, { forwardRef } from "react"
import { Button as ChakraButton } from "@chakra-ui/core"
import { useTheme } from "emotion-theming"

export const Button = forwardRef(({ variantStyles, ...props }, ref) => {
  const { buttons } = useTheme()

  return <ChakraButton ref={ref} {...buttons[variantStyles]} {...props} />
})

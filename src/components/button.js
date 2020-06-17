import React, { forwardRef } from "react"
import { Button as ChakraButton } from "@chakra-ui/core"

export const Button = forwardRef((props, ref) => {
  return (
    <ChakraButton
      ref={ref}
      height="38px"
      fontSize="sm"
      lineHeight="22px"
      letterSpacing="-0.12px"
      paddingY="8px"
      paddingX="0px"
      borderRadius="6px"
      {...props}
    />
  )
})

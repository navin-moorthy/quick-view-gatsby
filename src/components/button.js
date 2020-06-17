import React from "react"
import { Button as ChakraButton } from "@chakra-ui/core"

export const Button = props => {
  return (
    <ChakraButton
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
}

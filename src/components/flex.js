import React from "react"
import { Flex as ChakraFlex } from "@chakra-ui/core"

/**
 * Box component with `display="flex"`
 */
export const Flex = props => {
  return <ChakraFlex {...props} />
}

/**
 * Flex Component with `align="center"` `justify="center"`
 */
export const Center = props => {
  return <Flex align="center" justify="center" {...props} />
}

/**
 * Center Component `w="vw"` `h="vh"`
 */
export const ViewportCenter = props => {
  return <Center w="vw" h="vh" {...props} />
}

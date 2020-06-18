import React from "react"
import { Stack as ChakraStack } from "@chakra-ui/core"

/**
 * Flex Component with `flexDirection="column"
 *
 * Stack Spacing is available
 */
export const Stack = props => {
  return <ChakraStack {...props} />
}

/**
 * Flex Component with `flexDirection="row"
 *
 * Stack Spacing is available
 */
export const HStack = props => {
  return <Stack isInline {...props} />
}

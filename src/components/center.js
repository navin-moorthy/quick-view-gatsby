import React from "react"
import { Flex } from "@chakra-ui/core"

/**
 * Flex center the children
 *
 * Uses align: "center" and justify: "center"
 */
export const Center = props => {
  return <Flex align="center" justify="center" {...props} />
}

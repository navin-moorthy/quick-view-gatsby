import React from "react"
import { Center } from "./center"

/**
 * Center children in the viewport
 *
 * Uses w: "vw" and h: "vh"
 */
export const ViewportCenter = props => {
  return <Center w="vw" h="vh" {...props} />
}

import React from "react"

import { HStack, FullButton } from "../.."

const Footer = props => {
  return (
    <HStack flex="1" spacing="14px" {...props}>
      <FullButton variantStyles="primarySolid">Check Availability</FullButton>
      <FullButton
        variantStyles="secondarySolid"
        leftIcon="phone"
        iconSpacing={2}
        iconProps={{ fontSize: "xs" }}
      >
        Call
      </FullButton>
    </HStack>
  )
}

export default Footer

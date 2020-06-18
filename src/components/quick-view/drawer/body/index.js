import React from "react"
import { Box } from "@chakra-ui/core"

import { Image, FullButton, Text } from "../../.."
import Special from "./special"
import Title from "./title"
import AmenitiesGroup from "./amenities-group"
import PriceAndAvailability from "./price-and-availability"

const Body = ({ initialFocusRef }) => {
  return (
    <>
      <Box marginBottom="22px">
        <Image />
      </Box>
      <Title />
      <Special />
      <AmenitiesGroup heading="Unit" amenities={Array(16).fill("washer")} />
      <AmenitiesGroup
        heading="Community"
        amenities={Array(12).fill("washer")}
      />
      <PriceAndAvailability initialFocusRef={initialFocusRef} />
    </>
  )
}

export default Body

import React from "react"

import { Flex, Heading, FullButton, Text } from "../../.."
import Bedroom from "./bedroom"

const PriceAndAvailability = ({ initialFocusRef }) => {
  return (
    <Flex direction="column" marginBottom="30px">
      <Heading variantStyles="h5" marginBottom="18px">
        Price and Availability
      </Heading>

      <Bedroom />

      <FullButton
        ref={initialFocusRef}
        variantStyles="primaryGhost"
        marginBottom={2}
      >
        Check Availability
      </FullButton>

      <Text variantStyles="xs">
        Prices may vary depending on lease length. we get our prices directly
        from Sunstone Place
      </Text>
    </Flex>
  )
}

export default PriceAndAvailability

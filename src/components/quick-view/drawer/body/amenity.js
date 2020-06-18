import React from "react"
import { Icon } from "@chakra-ui/core"
import { HStack, Text } from "../../.."

const Amenity = ({ amenity }) => {
  return (
    <HStack align="center" spacing={3}>
      <Icon name={amenity} color="yellow.500" fontSize="24px" />
      <Text variantStyles="sm" color="blackAlpha.800">
        {`${amenity.charAt(0).toUpperCase()}${amenity.slice(1)}`}
      </Text>
    </HStack>
  )
}

export default Amenity

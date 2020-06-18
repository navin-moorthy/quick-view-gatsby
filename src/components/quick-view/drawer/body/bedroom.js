import React from "react"
import { Icon } from "@chakra-ui/core"

import { Stack, Text, HStack } from "../../.."

const Bedroom = () => {
  return (
    <Stack spacing={3}>
      <HStack align="center" spacing={2} color="blackAlpha.400">
        <Icon name="bedroom" fontSize="24px" />
        <Text variantStyles="xs">1 Bedroom</Text>
      </HStack>
      <HStack p="16px 10px" flex="1">
        <div>rest</div>
        <div>rest</div>
        <div>rest</div>
        <div>rest</div>
        <div>rest</div>
      </HStack>
    </Stack>
  )
}

export default Bedroom

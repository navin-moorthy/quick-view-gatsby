import React from "react"
import { Icon } from "@chakra-ui/core"

import { Stack, Heading, Text, HStack } from "../../.."

const Title = props => {
  return (
    <Stack spacing={3} marginBottom={4} {...props}>
      <Heading variantStyles="h4">Sunstone Place</Heading>
      <HStack align="center" color="blackAlpha.400" spacing="6px">
        <Icon name="pin" fontSize="md" />
        <Text variantStyles="sm">3750 Main St - Riverside, CA</Text>
      </HStack>
    </Stack>
  )
}

export default Title

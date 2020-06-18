import React from "react"
import {
  Stack,
  Box,
  Icon,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/core"

import { Image, FullButton, Text, Heading } from "../.."

const Body = ({ initialFocusRef }) => {
  return (
    <>
      <Box marginBottom="22px">
        <Image />
      </Box>

      <Stack spacing={3} marginBottom={4}>
        <Heading variantStyles="h4">Sunstone Place</Heading>
        <Text variantStyles="sm">
          <Icon
            name="pin"
            fontSize="md"
            verticalAlign="bottom"
            marginRight="6px"
          />
          3750 Main St - Riverside, CA
        </Text>
      </Stack>

      <Alert
        status="success"
        variant="solid"
        bg="green.400"
        marginBottom="74px"
        p="18px 24px"
        borderRadius="lg"
      >
        <AlertIcon name="special" alignSelf="flex-start" size="26px" mr={3} />
        <Stack>
          <AlertTitle fontWeight="600" lineHeight="20px" mb={1}>
            Rent Special
          </AlertTitle>
          <AlertDescription
            fontSize="13px"
            lineHeight="20px"
            letterSpacing="-0.12px"
          >
            Waived Application and Admin Fees! Spring into your new home today
            with our look and lease special! Valid on 9-15month lease terms only
            and application within 24hours of touring.
          </AlertDescription>
        </Stack>
      </Alert>

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
    </>
  )
}

export default Body

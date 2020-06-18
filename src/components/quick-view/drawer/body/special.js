import React from "react"
import {
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/core"

const Special = props => {
  return (
    <Alert
      status="success"
      variant="solid"
      bg="green.400"
      marginBottom="74px"
      p="18px 24px"
      borderRadius="lg"
      {...props}
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
  )
}

export default Special

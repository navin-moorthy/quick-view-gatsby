import React from "react"
import { Grid } from "@chakra-ui/core"

import { Stack, Heading, Text } from "../../.."
import Amenity from "./amenity"

const AmenitiesGroup = ({ heading, amenities }) => {
  const splittedAmenities = amenities.splice(0, 8)

  return (
    <Stack spacing={6} marginBottom="60px" maxW="400px">
      <Heading variantStyles="h5">{`${heading} Amenities`}</Heading>

      <Grid templateColumns="repeat(2, 1fr)" gridRowGap={6}>
        {splittedAmenities.map((amenity, i) => (
          <Amenity key={`amenities-${i}`} amenity={amenity} />
        ))}
      </Grid>

      {amenities.length ? (
        <Text variantStyles="sm" color="blue.500">
          {`View ${amenities.length} more amenities`}
        </Text>
      ) : null}
    </Stack>
  )
}

export default AmenitiesGroup

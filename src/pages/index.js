import React from "react"
import { Box, Text, useTheme } from "@chakra-ui/core"
import SEO from "../components/seo"

const IndexPage = () => {
  const theme = useTheme()
  console.log("%c theme", "color: #ff0000", theme)

  return (
    <Box p={8}>
      <SEO title="Home" />
      <Text fontSize="xl">Hello World</Text>
    </Box>
  )
}

export default IndexPage

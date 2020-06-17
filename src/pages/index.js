import React from "react"
import { Box, Text, useTheme } from "@chakra-ui/core"

import SEO from "../components/seo"
import { ViewportCenter } from "../components/viewport-center"

const IndexPage = () => {
  const theme = useTheme()
  console.log("%c theme", "color: #ff0000", theme)

  return (
    <ViewportCenter>
      <SEO title="Home" />
      <Text fontSize="xl">Hello World</Text>
    </ViewportCenter>
  )
}

export default IndexPage

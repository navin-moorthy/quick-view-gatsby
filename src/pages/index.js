import React, { useRef } from "react"
import { useTheme, useDisclosure } from "@chakra-ui/core"

import { SEO, ViewportCenter, Button, QuickViewDrawer } from "../components"

const IndexPage = () => {
  const theme = useTheme()
  console.log("%c theme", "color: #ff0000", theme)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <ViewportCenter>
      <SEO title="Home" />
      <Button ref={btnRef} variantStyles="primarySolid" onClick={onOpen}>
        Quick View
      </Button>
      <QuickViewDrawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      />
    </ViewportCenter>
  )
}

export default IndexPage

import React, { useRef } from "react"
import {
  Text,
  useTheme,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
} from "@chakra-ui/core"

import { SEO, ViewportCenter, Button } from "../components"

const IndexPage = () => {
  const theme = useTheme()
  console.log("%c theme", "color: #ff0000", theme)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <ViewportCenter>
      <SEO title="Home" />
      <Button ref={btnRef} variantColor="blue" paddingX={4} onClick={onOpen}>
        Quick View
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent maxW="700px">
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Text children="Body Here" />
          </DrawerBody>

          <DrawerFooter justifyContent="none">
            <Flex flex="1">
              <Button variantColor="blue" w="full" onClick={onClose}>
                Cancel
              </Button>
              <Button w="full">Save</Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </ViewportCenter>
  )
}

export default IndexPage

import React, { useRef } from "react"
import {
  Text,
  Button,
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

import SEO from "../components/seo"
import { ViewportCenter } from "../components/viewport-center"

const IndexPage = () => {
  const theme = useTheme()
  console.log("%c theme", "color: #ff0000", theme)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <ViewportCenter>
      <SEO title="Home" />
      <Button ref={btnRef} variantColor="blue" onClick={onOpen}>
        Open
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
              <Button variantColor="blue" w="full" mr={3} onClick={onClose}>
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

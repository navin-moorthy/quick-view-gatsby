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
  useDisclosure,
  Stack,
} from "@chakra-ui/core"

import { SEO, ViewportCenter, Button } from "../components"

const IndexPage = () => {
  const theme = useTheme()
  console.log("%c theme", "color: #ff0000", theme)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const drawerRef = useRef()

  return (
    <ViewportCenter>
      <SEO title="Home" />
      <Button
        ref={btnRef}
        variantStyles="primarySolid"
        paddingX={4}
        onClick={onOpen}
      >
        Quick View
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        initialFocusRef={drawerRef}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent maxW="700px">
          <DrawerHeader p="20px 30px">
            <Stack isInline justifyContent="space-between">
              <Button
                variantStyles="unstyled"
                leftIcon="arrow-back"
                onClick={onClose}
              ></Button>
              <Button
                variantStyles="unstyled"
                leftIcon="share"
                iconSpacing="12px"
              >
                Share
              </Button>
            </Stack>
          </DrawerHeader>

          <DrawerBody>
            <Text children="Body Here" />
          </DrawerBody>

          <DrawerFooter justifyContent="none" padding="30px">
            <Stack isInline flex="1" spacing="14px">
              <Button ref={drawerRef} variantStyles="primarySolid" w="full">
                Check Availability
              </Button>
              <Button
                variantStyles="secondarySolid"
                w="full"
                leftIcon="phone"
                iconSpacing={2}
              >
                Call
              </Button>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </ViewportCenter>
  )
}

export default IndexPage

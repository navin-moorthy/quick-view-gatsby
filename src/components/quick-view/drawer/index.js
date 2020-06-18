import React, { useRef } from "react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/core"

import Header from "./header"
import Footer from "./Footer"
import Body from "./body"

export const QuickViewDrawer = ({
  isOpen,
  onClose,
  finalFocusRef,
  ...props
}) => {
  const initialFocusRef = useRef()

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      initialFocusRef={initialFocusRef}
      finalFocusRef={finalFocusRef}
      {...props}
    >
      <DrawerOverlay />
      <DrawerContent maxW="700px" overflowY="auto">
        <DrawerHeader p="20px 30px">
          <Header onClose={onClose} />
        </DrawerHeader>

        <DrawerBody p="0 30px">
          <Body initialFocusRef={initialFocusRef} />
        </DrawerBody>

        <DrawerFooter justifyContent="none" padding="30px">
          <Footer />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

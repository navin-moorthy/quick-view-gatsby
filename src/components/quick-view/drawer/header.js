import React from "react"

import { HStack, Button, Text } from "../.."

const Header = ({ onClose, ...props }) => {
  return (
    <HStack justify="space-between" {...props}>
      <Button
        variantStyles="unstyled"
        leftIcon="arrow-back"
        onClick={onClose}
      />

      <Button variantStyles="unstyled" leftIcon="share" iconSpacing={3}>
        <Text variantStyles="sm" color="blackAlpha.400">
          Share
        </Text>
      </Button>
    </HStack>
  )
}

export default Header

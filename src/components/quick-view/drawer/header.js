import React from "react"

import { HStack, Button } from "../.."

const Header = ({ onClose, ...props }) => {
  return (
    <HStack justify="space-between" {...props}>
      <Button
        variantStyles="unstyled"
        leftIcon="arrow-back"
        onClick={onClose}
      />

      <Button variantStyles="unstyled" leftIcon="share" iconSpacing={3}>
        Share
      </Button>
    </HStack>
  )
}

export default Header

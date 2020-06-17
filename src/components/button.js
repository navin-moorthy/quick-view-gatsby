import React, { forwardRef } from "react"
import { Button as ChakraButton, Icon } from "@chakra-ui/core"
import { useTheme } from "emotion-theming"

export const Button = forwardRef(
  (
    {
      variantStyles,
      leftIcon,
      rightIcon,
      iconSpacing,
      iconProps,
      children,
      ...props
    },
    ref,
  ) => {
    const { buttons } = useTheme()

    return (
      <ChakraButton ref={ref} {...buttons[variantStyles]} {...props}>
        {leftIcon ? (
          <Icon name={leftIcon} marginRight={iconSpacing} {...iconProps} />
        ) : null}
        {children}
        {rightIcon ? (
          <Icon name={rightIcon} marginLeft={iconSpacing} {...iconProps} />
        ) : null}
      </ChakraButton>
    )
  },
)

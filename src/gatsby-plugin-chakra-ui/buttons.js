const baseButtonStyles = {
  height: "38px",
  paddingY: "8px",
  paddingX: "0px",
  fontSize: "sm",
  fontWeight: "500",
  lineHeight: "22px",
  letterSpacing: "-0.12px",
  borderRadius: "6px",
}

export const buttons = {
  unstyled: {
    variant: "unstyled",
    color: "blackAlpha.400",
    display: "inline-flex",
    height: "20px",
    minW: "20px",
  },
  base: baseButtonStyles,
  primarySolid: {
    ...baseButtonStyles,
    variantStyles: "base",
    variantColor: "blue",
  },
  primaryGhost: {
    ...baseButtonStyles,
    variantStyles: "base",
    bg: "blue.50",
    color: "blue.500",
    _hover: {
      bg: "blue.50",
    },
    _active: {
      bg: "blue.50",
    },
  },
  secondarySolid: {
    ...baseButtonStyles,
    variantStyles: "base",
    background: "gray.50",
    color: "blackAlpha.600",
  },
}

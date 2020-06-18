const quickViewButtonStyle = {
  height: "38px",
  paddingY: 2,
  paddingX: 4,
  fontSize: "sm",
  fontWeight: "500",
  lineHeight: "22px",
  letterSpacing: "-0.12px",
  borderRadius: "6px",
}

export const buttons = {
  unstyled: {
    variant: "unstyled",
    bg: "transparent",
    color: "blackAlpha.400",
    display: "inline-flex",
    height: "20px",
    minW: "20px",
  },
  base: quickViewButtonStyle,
  primarySolid: {
    ...quickViewButtonStyle,
    variantStyles: "base",
    variantColor: "blue",
  },
  primaryGhost: {
    ...quickViewButtonStyle,
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
    ...quickViewButtonStyle,
    variantStyles: "base",
    background: "gray.50",
    color: "blackAlpha.600",
  },
}

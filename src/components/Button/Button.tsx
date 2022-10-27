import React, { forwardRef, ReactNode } from "react";

import { styled, globalStyle } from "../../design/stitches.config"

// type ButtonProps = JSX.IntrinsicElements["button"];
type Props = React.ComponentProps<typeof StyledButton>;
const Button: React.FC<Props> = ({ ...props }) => {
  globalStyle()

  return (<StyledButton {...props}>
    {props.children}
  </StyledButton>)
}



const StyledButton = styled("button", {
  padding: "$x2 $x3",
  background: "$violet9",
  color: "$violet1",
  border: "none",
  borderRadius: "$borderRadius$br",
  transition: "0.1s",
  "&:hover": {
    background: "$violet11",
    cursor: "pointer"
  },
  variants: {
    mode: {
      primary: {

      },
      secondary: {
        background: "transparent",
        color: "$violet11",
        "&:hover": {
          background: "$violet9",
          color: "$violet1",
          cursor: "pointer"
        },
      },
      outline: {
        background: "white",
        border: "1px solid $violet11",
        color: "$violet11",
        "&:hover": {
          background: "$violet11",
          color: "$violet1",
          cursor: "pointer"
        },
      },
    }
  }
})

export default Button;
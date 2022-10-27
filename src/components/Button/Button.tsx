import React, { forwardRef, ReactNode } from "react";

import { styled, globalStyle } from "../../design/stitches.config"

// type ButtonProps = JSX.IntrinsicElements["button"];
type Props = React.ComponentProps<typeof StyledButton>;
const Button:React.FC<Props> = ({ ...props }) => {
  globalStyle()

  return (<StyledButton>
    {props.children}
  </StyledButton>)
}



const StyledButton = styled("button", {
  padding: "$x2 $x3",
  border: "none",
  background: "$primary",
  borderRadius: "$borderRadius$br",
  "&:hover": {
    opacity: 0.7,
    cursor: "pointer"
  }
})

export default Button;
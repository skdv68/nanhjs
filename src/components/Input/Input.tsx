import React, { forwardRef } from 'react'
import { styled } from "../../design/stitches.config"

type Props = React.ComponentProps<typeof StyledInput>;

const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <StyledInput ref={ref} {...props} />
  )
})

const StyledInput = styled("input", {
  boxSizing: "border-box",
  padding: "$x2 $x3",
  borderRadius: "$borderRadius$br",
  border: "1px solid $violet11",
  color: "$violet12",
  "&:focus": {
    outline: "2px solid $violet10",
  }
})

export default Input

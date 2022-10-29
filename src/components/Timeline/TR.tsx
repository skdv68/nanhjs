import { styled } from "../../design/stitches.config"


const TR = styled("tr", {
  position: 'relative',
  background: "white",
  height: 36,
  maxHeight: 36,
  minHeight: 36,
  zIndex: 0,
  "&:nth-child(odd)": {
    background: "#ccc"
  }
})

export default TR;
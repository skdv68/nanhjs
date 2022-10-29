import { styled } from "../../design/stitches.config"

const TD = styled("td", {
  // width: 100,
  // minWidth: 100,
  // maxWidth: 100,
  fontSize: "$14px",
  textAlign: "center",

  maxHeight: 36,
  variants: {
    mode: {
      taskHeader: {
        position: "sticky",
        padding: "$x2",
        fontWeight: "$bold",
        zIndex: 1,
        background: "$violet6",
        color: "$white",
        width: "100%",
        justifyContent: "center",
        borderRight: "1px solid black",
      },
      sticky: {
        position: "sticky",
        padding: "$x2",
        background: "$violet6",
        color: "$white",
        textAlign: "left",
        zIndex: 1,
        borderRight: "1px solid black",
        display: 'flex',
        alignItems: "center"
      },
      time: {
        borderRight: "1px solid black",
        background: "$violet6",
        color: "$white",
        wordWrap: "break-word",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
      },
      rail: {
        borderTop: "1px solid #666",
        borderRight: "1px solid #666",
      },
      default: {

      }
    },
    colSel: {
      first: {
        left: 0,
        width: 300,
        minWidth: 300,
        maxWidth: 300,
        display: "flex",
      },
    },
    isCurrent: {
      true: {
        background: "$primary",
      }
    }

  }
})

export default TD
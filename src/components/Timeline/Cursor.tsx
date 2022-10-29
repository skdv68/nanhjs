import React from 'react'
import dayjs from "dayjs"
import { styled } from "../../design/stitches.config"


type Props = {
  beginTimeFrame: dayjs.Dayjs
}

const cellWidth = 100;
const pinColWidth = 300;

const Cursor: React.FC<Props> = ({ beginTimeFrame }) => {
  const currentDay = dayjs();
  const startDateWidth: number = Number(currentDay.format("D")) - 1; 
  const difToBeginWidth: number = Math.ceil(Number(currentDay.diff(beginTimeFrame, 'month', true)))

  return (
    <Wrapper
      css={{
        zIndex: 0,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: `${(startDateWidth / currentDay.daysInMonth()) * cellWidth + pinColWidth + difToBeginWidth * cellWidth}px`,
      }}
    >

    </Wrapper>
  )
}

const Wrapper = styled("div", {
  width: 4,
  background: "orange",
  borderRadius: 100,
  opacity: 0.7,
})

export default Cursor;

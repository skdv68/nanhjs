import dayjs from 'dayjs'
import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { styled } from "../../design/stitches.config"
import { Task, Column } from "./BoardType"
import generateMonthHelper from "./generateMonthHelper"
import ParentTR from "./ParentTR"
import TD from "./TD"
import TR from "./TR"

import useTimelineConfig from "./useTimelineConfig"

type Props = {
  columns: { [key: string]: Column }
}

const Timeline: React.FC<Props> = ({ columns }) => {
  const [data, setData] = useState<{ [key: string]: Column }>(columns)
  const [months, setMonths] = useState<dayjs.Dayjs[]>(generateMonthHelper());
  const [tasks, setTasks] = useState<Task[]>([]);
  const currentMonthRef = useRef<HTMLTableDataCellElement>(null)
  const { config, zoomIn, zoomOut } = useTimelineConfig();
  console.log("[TIMELINE RERENDER]", data)
  useEffect(() => {
    // Scroll to the current month
    if (currentMonthRef.current) {
      currentMonthRef.current.scrollIntoView({
        block: 'center',
        inline: 'center'
      })
    }
  }, [currentMonthRef, config])

  // Generate task array
  useEffect(() => {
    setTasks(() => {
      let temp: Task[] = []
      // Take only tasks
      Object.keys(data).forEach(key => {
        temp = [...temp, ...data[key].tasks]
      })
      return temp
    })
  }, [])

  return (
    <Wrapper>
      <Table>
        <THead>
          <TR>
            <TD colSel="first" mode="taskHeader">Tasks</TD>
            {months.map((month, index) => {
              // Check current month to scroll into view
              if (dayjs().isSame(month, 'month') && dayjs().isSame(month, 'year')) {
                return (
                  <TD
                    key={month.toISOString()}
                    mode="time"
                    isCurrent
                    ref={currentMonthRef}
                    css={{
                      minWidth: `${(month.daysInMonth()) * config.oneDayWidth}px`,// 1 cell = oneDayWidthpx 
                      width: `${(month.daysInMonth()) * config.oneDayWidth}px`,// 1 cell = oneDayWidthpx 
                      maxWidth: `${(month.daysInMonth()) * config.oneDayWidth}px` // 1 cell = oneDayWidthpx
                    }}
                  >
                    {month.format("MMM") + " `" + month.format("YY")}
                  </TD>
                )
              }

              return (
                <TD
                  key={month.toISOString()}
                  mode="time"
                  css={{
                    minWidth: `${(month.daysInMonth()) * config.oneDayWidth}px`,// 1 cell = oneDayWidthpx 
                    width: `${(month.daysInMonth()) * config.oneDayWidth}px`,// 1 cell = oneDayWidthpx 
                    maxWidth: `${(month.daysInMonth()) * config.oneDayWidth}px` // 1 cell = oneDayWidthpx
                  }}
                >
                  {month.format("MMM") + " `" + month.format("YY")}
                </TD>
              )
            })}
          </TR>
        </THead>
        <TBody >
          {tasks.map((task, index) => (
            <ParentTR
              key={index}
              task={task}
              subTasks={task.subTasks}
              months={months}
              setData={setData}
              config={config}
            />
          ))}
        </TBody>


      </Table>
      <UltilityWrapper>
        <Button onClick={() => {
          if (currentMonthRef.current) {
            currentMonthRef.current.scrollIntoView({
              block: 'center',
              inline: 'center'
            })
          }
        }}>
          Center
        </Button>
        <Button onClick={zoomIn}>
          Zoom In
        </Button>
        <Button onClick={zoomOut}>
          Zoom Out
        </Button>

      </UltilityWrapper>
    </Wrapper>
  )
}

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  borderRadius: "$borderRadius$br",
  border: "2px solid black",
  boxShadow: "$color$boxShadow",
  position: "relative",
  overflow: "clip"
})

const Table = styled("table", {
  position: "relative",
  borderCollapse: "collapse",
  flexGrow: 1,
  border: "1px solid #666",
})
const THead = styled("thead", {})
const TBody = styled("tbody", {
  width: 10000,
  overflow: "scroll",
  position: "relative",
})
const TH = styled("th", {})

const UltilityWrapper = styled("div", {
  display: "flex",
  marginTop: "$x2",
  gap: "$x1",
})

const Button = styled("button", {
  padding: "$x2 $x3",
  background: "white",
  border: "1px solid black",
  borderRadius: "2px",
  "&:hover": {
    opacity: 0.7,
    cursor: "pointer",
  }
})

export default Timeline;



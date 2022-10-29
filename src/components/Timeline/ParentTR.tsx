import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { styled } from "../../design/stitches.config"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Task, Column } from "./BoardType"
import RailCell from "./RailCell"
import dayjs from "dayjs"
import TR from "./TR"
import TD from "./TD"
import { Config } from "./useTimelineConfig"

type Props = {
  task: Task
  subTasks: Task[] | undefined
  months: dayjs.Dayjs[]
  setData: React.Dispatch<React.SetStateAction<{ [key: string]: Column }>>
  config: Config
}

const ParentTR: React.FC<Props> = ({ task, subTasks, months, setData, config }) => {
  const [isActive, setIsActive] = useState<boolean>(false);


  return (
    <>
      <TR>
        <TD
          colSel="first"
          mode="sticky"
        >
          {
            task.subTasks ? (
              <Button
                stateRotate={isActive ? "open" : "close"}
                onClick={() => {
                  setIsActive(prev => !prev);
                }}
              >
                <ChevronDownIcon />
              </Button>
            ) : <Spacer />
          }
          <TaskTitle>
            {task.content}
          </TaskTitle>

        </TD>

        {/* render invisible month */}
        {months.map((month, index) => {
          return <TD
            key={month.toISOString()}
            mode="rail"
            css={{
              width: `${month.daysInMonth() * config.oneDayWidth}px`,// 1 cell = oneDayWidthpx 
              minWidth: `${month.daysInMonth() * config.oneDayWidth}px`,// 1 cell = oneDayWidthpx
              maxWidth: `${month.daysInMonth() * config.oneDayWidth}px` // 1 cell = oneDayWidthpx
            }}
          >
          </TD>
        })}

        {
          // Render rail cell
          task.startDate && task.dueDate ?
            <RailCell
              task={task}
              startDate={task.startDate as dayjs.Dayjs}
              dueDate={task.dueDate as dayjs.Dayjs}
              months={months}
              setData={setData}
              config={config}
            /> : null
        }
      </TR>
      {
        task.subTasks && isActive ?
          task.subTasks.map(task => (
            <TR key={task.id}>
              <TD
                colSel="first"
                mode="sticky"
              >
                <Spacer />
                <TaskTitle css={{ paddingLeft: "$x4" }}>
                  {task.content}
                </TaskTitle>
              </TD>

              {/* render invisible month */}
              {months.map(month => (
                <TD key={month.toISOString()} mode="rail">
                  {/* {month.format("MM")} */}
                </TD>
              ))}

              {
                // Render rail cell
                task.startDate && task.dueDate ?
                  <RailCell
                    task={task}
                    startDate={task.startDate as dayjs.Dayjs}
                    dueDate={task.dueDate as dayjs.Dayjs}
                    months={months}
                    setData={setData}
                    config={config}
                  /> : null
              }
            </TR>
          )) : null
      }
    </>
  )
}

const Button = styled("button", {
  padding: 0,
  background: "transparent",
  color: "white",
  border: "none",
  marginRight: "$x1",
  transition: "0.12s",
  "&:hover": {
    cursor: "pointer",
  },
  variants: {
    stateRotate: {
      close: {
        transform: "rotate(0deg)",
      },
      open: {
        transform: "rotate(180deg)",
      }
    }
  }
})

const TaskTitle = styled("p", {
  margin: 0,
  "&:hover": {
    opacity: 0.7,
    cursor: "pointer",
  }
})

const Spacer = styled("div", {
  width: 15,
  height: 15,
  marginRight: "$x1",
})

export default ParentTR;


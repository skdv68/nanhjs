import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import { useState, useRef } from "react"
import { styled } from "../../design/stitches.config"
import { Task, Column } from "./BoardType"
import { Config } from "./useTimelineConfig"

type Props = {
  task: Task
  startDate: dayjs.Dayjs
  dueDate: dayjs.Dayjs
  months: dayjs.Dayjs[]
  setData: React.Dispatch<React.SetStateAction<{ [key: string]: Column }>>
  config: Config
}

enum ModState {
  Init,
  Begin,
  Done
}

enum ControlState {
  Drag,
  ResizeLeft,
  ResizeRight,
}

const pinColWidth = 300;
const RailCell: React.FC<Props> = ({ task, startDate, dueDate, months, setData, config }) => {
  const cellRef = useRef<HTMLTableDataCellElement>(null)

  const daysBeforeNowHelper = () => {
    console.log("[Helper] - calculate days before now")
    let res = 0;
    for (let i = 0; i < months.length; i++) {
      if (months[i].isSame(startDate, 'month') && months[i].isSame(dueDate, 'year')) {
        break;
      }
      res += months[i].daysInMonth();
    }
    return res;
  }

  const daysAfterNowHelper = () => {
    let res = 0;
    for (let i = months.length - 1; i >= 0; i--) {
      if (months[i].isSame(dueDate, 'month') && months[i].isSame(dueDate, 'year')) {
        break;
      }
      res += months[i].daysInMonth();
    }
    return res;
  }

  const [daysBeforeNow, setDaysBeforeNow] = useState<number>(daysBeforeNowHelper)
  const [daysAfterNow, setDaysAfterNow] = useState<number>(daysAfterNowHelper)

  const leftHelper = () => ((startDate.date() - 1) * config.oneDayWidth + pinColWidth + daysBeforeNow * config.oneDayWidth)
  const rightHelper = () => ((dueDate.daysInMonth() - dueDate.date()) * config.oneDayWidth + daysAfterNow * config.oneDayWidth)
  // POS
  const [left, setLeft] = useState<number>(leftHelper)
  const [right, setRight] = useState<number>(rightHelper)
  // DATE
  const [showDate, setShowDate] = useState(false)
  const [start, setStart] = useState(startDate)
  const [due, setDue] = useState(dueDate)
  // Ultility
  const [doneModifying, setDoneModifying] = useState<ModState>(ModState.Init)
  const [popoverPositionX, setPopoverPositionX] = useState(0)
  const [popoverPositionY, setPopoverPositionY] = useState(0)
  // console.log("[Railfloor - Rerender]: \n", "Left: " + left, "\n", "DBN: " + daysBeforeNow, "\nConfig: " + config.oneDayWidth, "\nStart: " + startDate.toString(), "\nDue: " + dueDate.toString())

  const onMouseDown: { (event: React.MouseEvent<HTMLDivElement>, type: ControlState): void } = (event: React.MouseEvent<HTMLDivElement>, type: ControlState) => {

    // console.log("[Mouse] - On mouse down handler")
    // console.log("[Mouse] - type: ", type)

    event.preventDefault();
    event.stopPropagation();
    let oldPageX = event.pageX
    setDoneModifying(ModState.Begin)
    setShowDate(true);
    setPopoverPositionX(event.clientX)
    setPopoverPositionY(event.clientY - 28)
    function onMouseMove(event: MouseEvent) {
      setPopoverPositionX(event.clientX)
      setPopoverPositionY(event.clientY - 28)
      moveAt(event.pageX);
    }

    function moveAt(pageX: number) {
      const px = config.oneDayWidth // 1 cell width: ;

      switch (type) {
        case ControlState.Drag:
          if (cellRef.current) {
            if (pageX > oldPageX) { //mouse move right
              if (pageX - oldPageX >= px) {
                const mul = Math.floor((pageX - oldPageX) / px) // Movement acceleration
                setLeft(prev => {
                  return (prev + px * mul)
                })
                setRight(prev => {
                  return (prev - px * mul)
                })
                setStart(prev => prev.add(mul, 'day'))
                setDue(prev => prev.add(mul, 'day'))
                oldPageX = pageX
              }
            } else if (pageX < oldPageX) {
              if (oldPageX - pageX >= px) {
                const mul = Math.floor((oldPageX - pageX) / px)
                setLeft(prev => {
                  return (prev - px * mul)
                })
                setRight(prev => {
                  return (prev + px * mul)
                })
                setStart(prev => prev.subtract(mul, 'day'))
                setDue(prev => prev.subtract(mul, 'day'))
                oldPageX = pageX
              }
            }
          }
          break;
        case ControlState.ResizeLeft:
          if (cellRef.current) {
            if (pageX > oldPageX && cellRef.current.getBoundingClientRect().width > px * Math.floor((pageX - oldPageX) / px) *  2) { //mouse move right: ;
              if (pageX - oldPageX >= px) {
                const mul = Math.floor((pageX - oldPageX) / px)
                setLeft(prev => {
                  return (prev + px * mul)
                })
                setStart(prev => prev.add(mul, 'day'))
                oldPageX = pageX
              }
            } else if (pageX < oldPageX) {
              if (oldPageX - pageX >= px) {
                const mul = Math.floor((oldPageX - pageX) / px)
                setLeft(prev => {
                  return (prev - px * mul);
                })
                setStart(prev => prev.subtract(mul, 'day'))
                oldPageX = pageX
              }
            }
          }
          break;
        case ControlState.ResizeRight:
          if (cellRef.current) {
            if (pageX > oldPageX) { //mouse move right
              if (pageX - oldPageX >= px) {
                const mul = Math.floor((pageX - oldPageX) / px)
                setRight(prev => {
                  return (prev - px * mul)
                })
                setDue(prev => prev.add(mul, 'day'))
                oldPageX = pageX
              }
            } else if (pageX < oldPageX && cellRef.current.getBoundingClientRect().width > px * Math.floor((oldPageX - pageX) / px) * 2) {
              if (oldPageX - pageX >= px) {
                const mul = Math.floor((oldPageX - pageX) / px)
                setRight(prev => {
                  return (prev + px * mul)
                })
                setDue(prev => prev.subtract(mul, 'day'))
                oldPageX = pageX
              }
            }
          }
          break;
      }
    }

    function onMouseUp() {
      setShowDate(false)
      setDoneModifying(ModState.Done)
      document.removeEventListener('mousemove', onMouseMove);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp, { once: true })
  }

  useEffect(() => {
    // TODO update date
    if (doneModifying === ModState.Done) {
      // console.log("[Update] - update master data")
      setData(prev => {
        let tempData = { ...prev }
        let columnKeys: string[] = Object.keys(tempData)
        let flag = false
        for (const key of columnKeys) {
          const tasks = tempData[key].tasks
          for (let i = 0; i < tasks.length; i++) {
            if (tempData[key].tasks[i].id === task.id) {
              tempData[key].tasks[i].startDate = start;
              tempData[key].tasks[i].dueDate = due;
              flag = true;
              break;
            }

            const subTasks = tempData[key].tasks[i].subTasks ?? []
            for (let j = 0; j < subTasks.length; j++) {
              if (subTasks[j].id === task.id) {
                subTasks[j].startDate = start;
                subTasks[j].dueDate = due;
                flag = true;
                break;
              }
            }
          }
          if (flag) break;
        }

        setDoneModifying(ModState.Init)
        return tempData
      })
    }
  }, [doneModifying])

  useEffect(() => {
    setDaysBeforeNow(daysBeforeNowHelper)
    setDaysAfterNow(daysAfterNowHelper)
    setLeft(leftHelper)
    setRight(rightHelper)
  }, [config])

  return (
    <Wrapper
      // Use inline style for better performance, css={{}} will assign new class dynamically which is bad
      style={{
        top: 5,
        left: `${left}px`,
        right: `${right}px`,
      }}

      ref={cellRef}
      onDragStart={() => {
        return false;
      }}
      onMouseDown={(e) => onMouseDown(e, ControlState.Drag)}
    >
      <ResizeButton
        pos="start"
        onMouseDown={(e) => onMouseDown(e, ControlState.ResizeLeft)}
        onDragStart={() => {
          return false;
        }}
      />
      {showDate && <DatePopover
        style={{
          top: `${popoverPositionY}px`,
          left: `${popoverPositionX}px`,
        }}
        onDragStart={() => {
          return false;
        }}
      >
        {`${start.format("DD/MM/YY")} - ${due.format("DD/MM/YY")}`}
      </DatePopover>}
      <ResizeButton
        pos="end"
        onDragStart={() => {
          return false;
        }}
        onMouseDown={(e) => onMouseDown(e, ControlState.ResizeRight)}
      />
    </Wrapper>
  )
}

const DatePopover = styled("div", {
  position: "fixed",
  background: "$white",
  fontSize: "$12px",
  width: "max-content",
  borderRadius: "2px",
  padding: '$x1',
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  userSelect: "none",
  isolation: "isolate"
})

const Wrapper = styled("td", {
  position: "absolute",
  height: 26,
  background: "$violet3",
  borderRadius: "2px",
  zIndex: 0,
  "&:hover": {
    cursor: "pointer",
  },
})

const ResizeButton = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  width: 4,
  height: "100%",
  background: "transparent",
  border: "none",
  "&:hover": {
    cursor: "ew-resize"
  },
  variants: {
    pos: {
      start: {
        left: 0,
      },
      end: {
        right: 0,
      }
    }
  }
})

export default RailCell;
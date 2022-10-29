import React, { FormEvent } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useEffect, useState, useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside/useOnClickOutside'

import { styled } from "../../design/stitches.config"
import { Task, Column } from "./BoardType"
import ColumnItem from "./ColumnItem"
import { PlusIcon } from "@radix-ui/react-icons"

type Props = {
  title: string
  columns: { [key: string]: Column }
}

const Board: React.FC<Props> = ({ title, columns }) => {

  const [data, setData] = useState<{ [key: string]: Column }>(columns)
  const [colNum, setColNum] = useState<number>(Object.keys(data).length)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  console.log(data)

  useEffect(() => {
    if (isEditing) {
      const width: number = Number(wrapperRef.current?.scrollWidth);
      console.log(width);
      wrapperRef.current?.scrollBy(width, 0);
    }
  }, [isEditing])

  useEffect(() => {
    const currentColNum = Object.keys(data).length
    if (currentColNum !== colNum) {
      const width: number = Number(wrapperRef.current?.scrollWidth);
      console.log(width);
      wrapperRef.current?.scrollBy(width, 0);
      setColNum(currentColNum)
    }
  }, [data])

  useOnClickOutside(formRef, () => {
    setIsEditing(false);
  })

  const onDragEndHandler = (result: DropResult) => {
    const { destination, source } = result

    // Drop outside -> cancle drag
    if (!destination || (destination.droppableId === source.droppableId
      && destination.index === source.index)) return

    let destinationId = destination.droppableId
    let sourceId = source.droppableId
    let dataClone = { ...data };
    let add = dataClone[sourceId].tasks[source.index];

    if (add) { // If can find source element
      dataClone[sourceId].tasks.splice(source.index, 1); // Remove from the old list
      dataClone[destinationId].tasks.splice(destination.index, 0, add); // Add to new list
      setData(dataClone)
    }
  }

  const handleOnKeyDownInputField = (e: FormEvent | KeyboardEvent) => {
    const ek = e as KeyboardEvent
    if (ek.key === 'Escape') {
      setIsEditing(false)
    } else if (ek.key === 'Enter' && !(ek.shiftKey)) {
      addNewColumn(e as FormEvent);
    }
  }

  const addNewColumn = (e: FormEvent) => {
    e.preventDefault();
    if (null !== inputRef.current) {
      const content = inputRef.current.value
      const id = Date.now().toString()
      if (content !== "") {
        const newColumn: Column = {
          id: id,
          title: content,
          tasks: []
        }
        inputRef.current.value = "";
        setIsEditing(false);
        setData((data) => {
          let tempData = { ...data }
          tempData[id] = newColumn;
          return tempData;
        })
      }
    }
  }

  return (
    <Wrapper ref={wrapperRef}>
      <DragDropContext onDragEnd={onDragEndHandler}>
        <ColumnWrapper>
          {Object.keys(data).map(key => {
            let column = data[key]
            return (<ColumnItem key={column.id} id={column.id} tasks={column.tasks} title={column.title} setData={setData} />)
          })
          }
        </ColumnWrapper>
      </DragDropContext>
      <AddColumnWrapper>
        {!isEditing &&
          <PreAddButton onClick={() => {
            setIsEditing(true)
          }}>
            <PlusIcon />
          </PreAddButton>
        }
        {isEditing &&
          <AddColumnForm ref={formRef} onSubmit={addNewColumn}>
            <AddColumnInputField
              type="text"
              placeholder="Enter new column"
              ref={inputRef}
              onKeyDown={handleOnKeyDownInputField}
            />
          </AddColumnForm>
        }
      </AddColumnWrapper>
    </Wrapper >)
}

const Wrapper = styled("div", {
  overflow: "auto",
  display: "flex"
})

const ColumnWrapper = styled("div", {
  display: 'flex',
  gap: "$x2",
})

const AddColumnWrapper = styled("div", {
  marginLeft: "$x2",
})

const PreAddButton = styled("button", {
  padding: "$x3",
  display: "grid",
  placeItems: "center",
  borderRadius: "2px",
  color: "$white",
  background: "$secondary",
  border: "none",
  "&:hover": {
    opacity: 0.7,
    cursor: "pointer"
  }
})

const AddColumnForm = styled("form", {

})

const AddColumnInputField = styled("input", {
  padding: "$x2 $x3",
  border: "1px solid black",
  borderRadius: "2px",
  minWidth: "320px",
  maxWidth: "320px",

})

const SubmitColumn = styled("input", {

})

export default Board;
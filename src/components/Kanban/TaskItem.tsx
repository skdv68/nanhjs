import React from 'react';
import { Task } from "./BoardType"
import { Draggable } from 'react-beautiful-dnd'
import { styled } from "../../design/stitches.config"

interface Props extends Task {
  index: number
}

const TaskItem: React.FC<Props> = ({
  id,
  index,
  content,
  startDate,
  dueDate,
  assignee
}) => {
  return (
    <Draggable draggableId={id} index={index} key={id}>
      {
        (provided, snapshot) => (
          <Wrapper
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onClick={() => {
              console.log("Task clicked", id)
              console.log(startDate)
              console.log(dueDate)
            }}
          >
            {content}

          </Wrapper>
        )
      }
    </Draggable>
  )
}

const Wrapper = styled("div", {
  padding: '$x2',
  borderRadius: "2px",
  background: "$white",
  color: "$text",
  marginTop: "$x1",
  boxShadow: " rgba(99, 99, 99, 0.4) 0px 2px 8px 0px",
  fontSize: "$14px",
})

export default TaskItem
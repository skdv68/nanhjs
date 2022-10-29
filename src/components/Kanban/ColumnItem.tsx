import React, { FormEvent } from 'react';
import { useState, useRef, useCallback } from "react";
import { Task } from "./BoardType"
import { Droppable } from 'react-beautiful-dnd'
import { styled } from "../../design/stitches.config"
import TaskItem from "./TaskItem"
import { Column } from "./BoardType"
import { PlusIcon } from "@radix-ui/react-icons"
import useOnClickOutside from "../../hooks/useOnClickOutside/useOnClickOutside"


type Props = {
  id: string;
  title: string;
  tasks: Task[];
  setData: React.Dispatch<React.SetStateAction<{ [key: string]: Column }>>
}

const ColumnItem: React.FC<Props> = ({ id, title, tasks, setData }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [wordCount, setWordCount] = useState<number>(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const submitRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useOnClickOutside(formRef, (e) => {
    setWordCount(0)
    setIsEditing(false)
  })

  const handleOnChangeInputField = () => {
    if (inputRef.current) {
      setWordCount(inputRef.current.value.length)
    }
  }

  const hanldeOnKeyDownInputField = (e: KeyboardEvent | FormEvent) => {
    const ek = e as KeyboardEvent
    if (ek.key === 'Escape') {
      setWordCount(0)
      setIsEditing(false)
    } else if (ek.key === 'Enter' && !(ek.shiftKey)) {
      addNewTask(e as FormEvent);
    }
  }
  
  const addNewTask = (e: FormEvent) => {
    e.preventDefault();
    if (null !== inputRef.current) {
      const content = inputRef.current.value
      if (content !== "") {
        const newTask: Task = {
          id: Date.now().toString(),
          content: content
        }
        setWordCount(0);
        inputRef.current.value = "";
        inputRef.current.focus()
        setData((data) => {
          let tempData = { ...data }
          tempData[id].tasks.push(newTask)
          return tempData;
        })
      }
    }
  }

  return (<Droppable droppableId={id}>
    {
      (provided, snapshot) => (
        <Wrapper
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Title>
            {title}
          </Title>
          {
            tasks.map((task, index) => {
              return <TaskItem 
              id={task.id} 
              content={task.content} 
              startDate={task?.startDate}
              dueDate={task?.dueDate}
              assignee={task?.assignee}
              index={index} 
              key={index} />
            })
          }

          {provided.placeholder}

          <AddTaskWrapper
          >
            {!isEditing && (
              <AddTaskButton
                onClick={() => { setIsEditing(true) }}>
                <PlusIcon />
                Create
              </AddTaskButton>
            )}

            {isEditing && (<TaskForm
              ref={formRef}
              onSubmit={e => {
                addNewTask(e)
              }
              }>
              <InputField
                ref={inputRef}
                placeholder="Enter new task"
                maxLength={200}
                onChange={handleOnChangeInputField}
                onKeyDown={hanldeOnKeyDownInputField}
              />
              <FormActionWrapper>
                <SubmitTask ref={submitRef} type="submit" value="Create" />
                <CloseForm
                  ref={closeRef}
                  onClick={() => {
                    setWordCount(0)
                    setIsEditing(false)
                  }}
                >
                  Close
                </CloseForm>
                <WordCount>
                  {`${wordCount}/200`}
                </WordCount>
              </FormActionWrapper>
            </TaskForm>)}
          </AddTaskWrapper>

        </Wrapper>
      )
    }
  </Droppable>)
}

const Wrapper = styled("div", {
  padding: "$x2",
  borderRadius: "2px",
  background: "$secondary",
  color: "$white",
  minWidth: "360px",
  maxWidth: "360px",
  maxHeight: "max-content"
})

const Title = styled("span", {
  fontWeight: "$semiBold",
})

const AddTaskWrapper = styled("div", {
  minHeight: "80px",
})

const AddTaskButton = styled("button", {
  color: "$white",
  marginTop: "$x2",
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignContent: "center",
  gap: "2px",
  padding: "$x2 0",
  border: "none",
  borderRadius: "2px",
  background: "$secondary",
  "&:hover": {
    opacity: 0.5,
    cursor: "pointer"
  }
})

const TaskForm = styled("form", {

})

const InputField = styled("textarea", {
  resize: "none",
  marginTop: "$x2",
  maxHeight: "84px",
  wordWrap: "break-word",
  wordBreak: "break-all",
  padding: "$x2",
  border: "none",
  width: "100%",
  borderRadius: "2px",
})

const WordCount = styled("p", {
  width: "100%",
  textAlign: "right",
  opacity: 0.7,
  margin: 0,
  fontSize: "$12px",
})

const FormActionWrapper = styled("div", {
  display: "flex",
  gap: "$x1",
  marginTop: "$x1",
})

const SubmitTask = styled("input", {
  padding: "$x2 $x3",
  border: "none",
  borderRadius: "2px",
  background: "$white",
  "&:hover": {
    opacity: 0.7,
    cursor: "pointer"
  }
})

const CloseForm = styled("button", {
  padding: "$x2 $x3",
  border: "none",
  borderRadius: "2px",
  background: "$white",
  "&:hover": {
    opacity: 0.7,
    cursor: "pointer"
  }
})

export default ColumnItem;
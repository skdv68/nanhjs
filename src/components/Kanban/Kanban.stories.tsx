/* eslint-disable import/no-anonymous-default-export */
// /stories/pages/home.stories.jsx
import React from 'react'
import Board from "./Board";
import dayjs from 'dayjs';


export default {
  title: "Components/Kanban",
  component: Board,
};



export const KanbanBoard = () => <Board title={"SKDV"} columns={
  {
    c1: {
      id: "c1",
      title: "Backlog",
      tasks: [
        {
          id: "t1",
          content: "Figma wireframe",
          startDate: dayjs("10-30-2022", "MM-DD-YYYY"),
          dueDate: dayjs("10-10-2022", "MM-DD-YYYY")
        },
        {
          id: "t2",
          content: "Config stitches"
        },
      ]
    },
    c2: {
      id: "c2",
      title: "In Progress",
      tasks: [
        {
          id: "t3",
          content: "Talk to client"
        },
        {
          id: "t4",
          content: "Requirements elicitation"
        },
      ]
    },
  }
} />


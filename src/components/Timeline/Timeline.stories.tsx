import Timeline from "./Timeline"
import dayjs from 'dayjs';
import React from "react";

export default {
  title: "Components/Timeline",
  component: Timeline,
}

const baseData = {
  c1: {
    id: "c1",
    title: "Backlog",
    tasks: [
      {
        id: "t1",
        content: "Figma wireframe",
        startDate: dayjs("02-28-2022", "MM-DD-YYYY"),
        dueDate: dayjs("05-01-2022", "MM-DD-YYYY")
      },
      {
        id: "t2",
        content: "Config stitches",
        startDate: dayjs("10-31-2022", "MM-DD-YYYY"),
        dueDate: dayjs("11-30-2022", "MM-DD-YYYY")
      },
    ]
  },
  c2: {
    id: "c2",
    title: "In Progress",
    tasks: [
      {
        id: "t3",
        content: "Talk to client",
        startDate: dayjs("11-28-2022", "MM-DD-YYYY"),
        dueDate: dayjs("01-01-2023", "MM-DD-YYYY"),
        subTasks: [
          {
            id: "s1",
            content: "Sub task of t3 s1",
            startDate: dayjs("02-28-2022", "MM-DD-YYYY"),
            dueDate: dayjs("10-10-2022", "MM-DD-YYYY"),
          },
          {
            id: "s2",
            content: "Sub task of t3 s2",
            startDate: dayjs("10-28-2022", "MM-DD-YYYY"),
            dueDate: dayjs("12-12-2022", "MM-DD-YYYY"),
          }
        ]
      },
      {
        id: "t4",
        content: "Requirements elicitation",
        startDate: dayjs("09-12-2022", "MM-DD-YYYY"),
        dueDate: dayjs("12-11-2022", "MM-DD-YYYY")
      },
    ]
  },
}



export const TimelineDefault = () => {
  return (<Timeline columns={baseData} />)
}
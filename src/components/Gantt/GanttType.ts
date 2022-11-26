import dayjs from 'dayjs';
export interface Task {
  id: string
  content: string
  startDate?: dayjs.Dayjs
  dueDate?: dayjs.Dayjs
  assignee?: string[],
  subTasks?: Task[],
}

export interface Column {
  id: string
  title: string
  tasks: Task[]
}
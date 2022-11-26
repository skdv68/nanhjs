// Todo generate month, back 1 year, forward 2 years
import dayjs from "dayjs";


const useGenerateTimeline = ():dayjs.Dayjs[] => {
  const currentDay = dayjs();
  const startDay = currentDay.subtract(1, 'year')
  const endDay = currentDay.add(2, 'year')
  let curDay = startDay.clone()
  let cols: dayjs.Dayjs[] = []
  for (let i = 0; i < 48; i++) {
    cols.push(curDay)
    curDay = curDay.add(1, 'month')
  }
  cols[0].set('day', 1);
  return cols
}

export default useGenerateTimeline;
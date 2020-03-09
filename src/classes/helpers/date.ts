export const getDateDifference = (start: Date, end: Date) => {
  const millis = new Date(end).getTime() - new Date(start).getTime()
  return new Date(millis)
}

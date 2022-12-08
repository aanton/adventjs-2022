function countHours(year, holidays) {
  return (
    holidays
      .map(holiday => new Date(`${year}/${holiday} 12:00:00`))
      .map(date => date.getDay())
      .filter(weekDay => weekDay && weekDay < 6).length * 2
  )
}

export default countHours

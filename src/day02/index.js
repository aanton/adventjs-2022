/**
 * @param {number} year
 * @param {string[]} holidays
 * @returns {number}
 */
function countHours(year, holidays) {
  return (
    holidays
      .map(holiday => new Date(`${year}/${holiday} 12:00:00`))
      .map(date => date.getDay())
      .filter(weekDay => weekDay && weekDay < 6).length * 2
  )
}

// function countHours(year, holidays) {
//   return (
//     holidays
//       .map(holiday => new Date(`${year}/${holiday}`).getDay())
//       .filter(weekDay => weekDay && weekDay < 6).length * 2
//   )
// }

export default countHours

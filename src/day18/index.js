/**
 * @param {number} dry
 * @param {number} numbers
 * @returns {number[]}
 */
function dryNumber(dry, numbers) {
  const dryString = dry.toString()

  return Array.from({length: numbers}, (_, index) => index + 1).filter(number =>
    number.toString().includes(dryString)
  )
}

export {dryNumber}

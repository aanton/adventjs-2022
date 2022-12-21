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

/**
 * @param {number} dry
 * @param {number} numbers
 * @returns {number[]}
 */
function dryNumberRegex(dry, numbers) {
  const re = new RegExp(dry.toString())
  return Array.from({length: numbers}, (_, index) => index + 1).filter(number =>
    re.test(number.toString())
  )
}

export {dryNumber, dryNumberRegex}

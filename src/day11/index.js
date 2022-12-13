/**
 * @param {string} part
 * @param {string} total
 * @returns string
 */
function getCompleted(part, total) {
  const convertToSeconds = raw =>
    raw.split(':').reduce((acc, value) => acc * 60 + Number(value))

  const getGreatestCommonDivisor = (number1, number2) => {
    while (number2) [number1, number2] = [number2, number1 % number2]
    return number1
  }

  const partInSeconds = convertToSeconds(part)
  const totalInSeconds = convertToSeconds(total)
  const gcd = getGreatestCommonDivisor(totalInSeconds, partInSeconds)

  return `${partInSeconds / gcd}/${totalInSeconds / gcd}`
}

function getCompletedOptimized(part, total) {
  const convertToSeconds = raw =>
    raw.split(':').reduce((acc, value) => acc * 60 + Number(value))

  const partInSeconds = convertToSeconds(part)
  const totalInSeconds = convertToSeconds(total)

  // Greatest Common Divisor
  let gcd1 = totalInSeconds
  let gcd2 = partInSeconds
  while (gcd2) {
    const tmp = gcd1 % gcd2
    gcd1 = gcd2
    gcd2 = tmp
  }

  return `${partInSeconds / gcd1}/${totalInSeconds / gcd1}`
}

export {getCompleted, getCompletedOptimized}

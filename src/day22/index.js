/**
 * @param {string[]} systemNames
 * @param {number[]} stepNumbers
 * @returns boolean
 */
function checkStepNumbers(systemNames, stepNumbers) {
  return systemNames.every((systemName, index) => {
    const nextIndex = systemNames.indexOf(systemName, index + 1)
    return nextIndex === -1 || stepNumbers[index] <= stepNumbers[nextIndex]
  })
}

export {checkStepNumbers}

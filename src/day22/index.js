/**
 * @param {string[]} systemNames
 * @param {number[]} stepNumbers
 * @returns boolean
 */
function checkStepNumbers(systemNames, stepNumbers) {
  const stepsBySystem = systemNames.reduce((acc, system, index) => {
    acc[system] = acc[system] || []
    acc[system].push(stepNumbers[index])

    return acc
  }, {})

  return Object.values(stepsBySystem).every(steps =>
    steps.slice(1).every((step, index) => step >= steps[index])
  )
}

export {checkStepNumbers}

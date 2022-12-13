/**
 * @param {number} distance
 * @param {{name: string, consumption: number}[]} sleighs
 * @returns {string|null}
 */
function selectSleigh(distance, sleighs) {
  const firstInvalidSleighIndex = sleighs.findIndex(
    sleight => sleight.consumption * distance > 20
  )

  if (firstInvalidSleighIndex === 0) return null
  if (firstInvalidSleighIndex === -1) return sleighs.pop().name

  return sleighs[firstInvalidSleighIndex - 1].name
}

/**
 * @param {number} distance
 * @param {{name: string, consumption: number}[]} sleighs
 * @returns {string|null}
 */
function selectSleighOptimized(distance, sleighs) {
  sleighs.unshift({name: null, consumption: 0})
  sleighs.push({name: 'Too much consumption', consumption: 21})

  const invalidSleighIndex = sleighs.findIndex(
    sleight => sleight.consumption * distance > 20
  )

  return sleighs[invalidSleighIndex - 1].name
}

export {selectSleigh, selectSleighOptimized}

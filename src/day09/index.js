/**
 * @param {number[]} leds
 * @returns number
 */
function countTime(leds) {
  const ledsOnPositions = leds
    .map((on, index) => (on === 1 ? index : -1))
    .filter(index => index !== -1)

  // Adds a virtual position to represent the gap between
  // the last & first positions (circular representation)
  ledsOnPositions.push(leds.length + ledsOnPositions[0])

  const maxGapBetweenLedsOn = ledsOnPositions
    .slice(1)
    .reduce(
      (acc, position, index) =>
        Math.max(acc, position - ledsOnPositions[index]),
      0
    )

  return (maxGapBetweenLedsOn - 1) * 7
}

export default countTime

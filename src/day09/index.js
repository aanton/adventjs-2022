/**
 * @param {number[]} leds
 * @returns number
 */
function countTime(leds) {
  const ledsOffStrips = leds
    .join('')
    .split('1')
    .map(strip => strip.length)

  // Join first & last strips in a unique strip (circular strip)
  ledsOffStrips[0] += ledsOffStrips.pop()

  return Math.max(...ledsOffStrips) * 7
}

export default countTime

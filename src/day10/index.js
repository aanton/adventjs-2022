/**
 * @param {number[]} heights
 * @returns boolean
 */
function checkJump(heights) {
  const maxHeight = Math.max(...heights)
  const maxHeightIndex = heights.indexOf(maxHeight) - 1

  return (
    heights[0] !== maxHeight &&
    heights[heights.length - 1] !== maxHeight &&
    heights
      .slice(1)
      .every((height, index) =>
        index <= maxHeightIndex
          ? height >= heights[index]
          : height <= heights[index]
      )
  )
}

/**
 * @param {number[]} heights
 * @returns boolean
 */
function checkJumpOptimized(heights) {
  const maxHeight = Math.max(...heights)
  const maxHeightIndex = heights.indexOf(maxHeight)

  return (
    heights[0] !== maxHeight &&
    heights[heights.length - 1] !== maxHeight &&
    heights
      .slice(1, maxHeightIndex + 1)
      .every((height, index) => height >= heights[index]) &&
    heights
      .slice(maxHeightIndex + 1)
      .every((height, index) => height <= heights[index + maxHeightIndex])
  )
}

export {checkJump, checkJumpOptimized}

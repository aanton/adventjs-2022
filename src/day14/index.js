/**
 * @param {number[][]} path
 * @returns number
 */
function getOptimalPath(path) {
  const getMinimumSumPath = (row, column) => {
    if (row === path.length) return 0

    return (
      path[row][column] +
      Math.min(
        getMinimumSumPath(row + 1, column),
        getMinimumSumPath(row + 1, column + 1)
      )
    )
  }

  const optimalPath = getMinimumSumPath(0, 0)
  return optimalPath
}

/**
 * @param {number[][]} path
 * @returns number
 */
function getOptimalPathOptimized(path) {
  const memory = path.pop()

  for (let i = path.length - 1; i >= 0; i--) {
    for (let j = 0; j < path[i].length; j++) {
      memory[j] = Math.min(memory[j], memory[j + 1]) + path[i][j]
    }
  }

  return memory[0]
}

export {getOptimalPath, getOptimalPathOptimized}

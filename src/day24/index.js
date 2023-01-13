/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canExit(maze) {
  const findPosition = value =>
    Object.keys(positionsMap).find(key => positionsMap[key] === value)

  const getValidNeighbors = function (position) {
    const [x, y] = position.split('-').map(value => Number(value))

    return [`${x - 1}-${y}`, `${x + 1}-${y}`, `${x}-${y - 1}`, `${x}-${y + 1}`]
      .filter(neighbor => !visitedPositions.includes(neighbor))
      .filter(neighbor => [' ', 'E'].includes(positionsMap[neighbor]))
  }

  const positionsMap = Object.fromEntries(
    maze.flatMap((row, y) => row.map((value, x) => [`${y}-${x}`, value]))
  )

  const startPosition = findPosition('S')
  const endPosition = findPosition('E')

  const visitedPositions = [startPosition]
  const positionsToCheck = [startPosition]

  while (positionsToCheck.length) {
    const currentPosition = positionsToCheck.shift()

    const validNeighbors = getValidNeighbors(currentPosition)

    if (validNeighbors.includes(endPosition)) return true

    validNeighbors.forEach(neighbor => {
      positionsToCheck.push(neighbor)
      visitedPositions.push(neighbor)
    })
  }

  return false
}

export {canExit}

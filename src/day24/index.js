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

/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canExitOptimized(maze) {
  const wrapMazeWithWalls = function () {
    maze.forEach(row => (row.unshift('W'), row.push('W')))

    const wallRow = 'W'.repeat(maze[0].length).split('')
    maze.unshift(wallRow)
    maze.push(wallRow)
  }

  const isVisitedPosition = function (x, y) {
    return !visitedPositions
      .filter(position => position[0] === x)
      .some(position => position[1] === y)
  }

  const getValidNeighbors = function (x, y) {
    return [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ]
      .filter(neighbor => isVisitedPosition(...neighbor))
      .filter(neighbor => maze[neighbor[1]][neighbor[0]] !== 'W')
  }

  wrapMazeWithWalls()

  const startY = maze.findIndex(row => row.includes('S'))
  const startX = maze[startY].findIndex(cell => cell === 'S')
  const startPosition = [startX, startY]

  const visitedPositions = [startPosition]
  const positionsToCheck = [startPosition]
  let foundExit = false

  while (positionsToCheck.length && !foundExit) {
    const currentPosition = positionsToCheck.shift()

    const validNeighbors = getValidNeighbors(...currentPosition)

    validNeighbors.forEach(neighbor => {
      positionsToCheck.push(neighbor)
      visitedPositions.push(neighbor)
    })

    foundExit = validNeighbors.some(
      neighbor => maze[neighbor[1]][neighbor[0]] === 'E'
    )
  }

  return foundExit
}

export {canExit, canExitOptimized}

// import {getOptimalPath} from './index'
import {getOptimalPathOptimized as getOptimalPath} from './index'

const cases = [
  {
    path: [[0], [7, 4], [2, 4, 6]],
    expected: 8,
  },
  {
    path: [[0], [2, 3]],
    expected: 2,
  },
  {
    path: [[0], [3, 4], [9, 8, 1]],
    expected: 5,
  },
  {
    path: [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]],
    expected: 8,
  },
  {
    path: [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]],
    expected: 7,
  },
]

describe('Day 14 challenge', () => {
  it.each(cases)('gets $expected as the optimal path', ({path, expected}) => {
    expect(getOptimalPath(path)).toEqual(expected)
  })
})

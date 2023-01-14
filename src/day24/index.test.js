// import {canExit} from './index'
import {canExitOptimized as canExit} from './index'

// prettier-ignore
const cases = [
  {
    maze: [
      [' ', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ],
    expected: true,
  },
  {
    maze: [
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ],
    expected: false,
  },
  {
    maze: [
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', ' ', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ],
    expected: false,
  },
  {
    maze: [
      ['E', ' ', ' ', ' ', 'S']
    ],
    expected: true,
  },
  {
    maze: [
      ['E', ' ', 'W', ' ', 'S']
    ],
    expected: false,
  },
  {
    maze: [
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
    ],
    expected: true,
  },
  {
    maze: [
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W'],
    ],
    expected: true,
  },
  {
    maze: [
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', 'W', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W'],
    ],
    expected: false,
  },
  {
    maze: [
      ['E', 'S', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W']
    ],
    expected: true,
  },
]

describe('Day 24 challenge', () => {
  it.each(cases)(
    'returns $expected when trying to exit the mace',
    ({maze, expected}) => {
      expect(canExit(maze)).toEqual(expected)
    }
  )
})

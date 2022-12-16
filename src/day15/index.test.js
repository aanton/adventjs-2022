import {decorateTree} from './index'

const cases = [
  {
    base: 'B P R P',
    expected: ['R', 'P B', 'R B B', 'B P R P'],
  },
  {
    base: 'B B',
    expected: ['B', 'B B'],
  },
  {
    base: 'B B P R P R R',
    expected: [
      'B',
      'R P',
      'B P P',
      'P R B R',
      'P P B B P',
      'B R B B B R',
      'B B P R P R R',
    ],
  },
  {
    base: 'R R P R R',
    expected: ['R', 'R R', 'P B P', 'R B B R', 'R R P R R'],
  },
]

describe('Day 15 challenge', () => {
  it.each(cases)(
    'decorates the tree when the base is $base',
    ({base, expected}) => {
      expect(decorateTree(base)).toEqual(expected)
    }
  )
})

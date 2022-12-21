import {sortToys} from './index'

const cases = [
  {
    toys: ['ball', 'doll', 'car', 'puzzle'],
    positions: [2, 3, 1, 0],
    expected: ['puzzle', 'car', 'ball', 'doll'],
  },
  {
    toys: ['pc', 'xbox', 'ps4', 'switch', 'nintendo'],
    positions: [3, 1, 0, 2, 4],
    expected: ['ps4', 'xbox', 'switch', 'pc', 'nintendo'],
  },
  {
    toys: ['pc', 'xbox', 'ps4', 'switch', 'nintendo'],
    positions: [8, 6, 5, 7, 9],
    expected: ['ps4', 'xbox', 'switch', 'pc', 'nintendo'],
  },
  {
    toys: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
    positions: [
      1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111,
    ],
    expected: ['l', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'],
  },
]

describe('Day 19 challenge', () => {
  it.each(cases)(
    'sorts the toys $toys using the positions $positions',
    ({toys, positions, expected}) => {
      expect(sortToys(toys, positions)).toEqual(expected)
    }
  )
})

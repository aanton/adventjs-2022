import {dryNumber} from './index'

const cases = [
  {
    dry: 1,
    numbers: 15,
    expected: [1, 10, 11, 12, 13, 14, 15],
  },
  {
    dry: 2,
    numbers: 20,
    expected: [2, 12, 20],
  },
  {
    dry: 3,
    numbers: 33,
    expected: [3, 13, 23, 30, 31, 32, 33],
  },
  {
    dry: 4,
    numbers: 45,
    expected: [4, 14, 24, 34, 40, 41, 42, 43, 44, 45],
  },
  {
    dry: 5,
    numbers: 55,
    expected: [5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55],
  },
  {
    dry: 9,
    numbers: 8,
    expected: [],
  },
]

describe('Day 18 challenge', () => {
  it.each(cases)(
    'dries the code $dry for the numbers $numbers',
    ({dry, numbers, expected}) => {
      expect(dryNumber(dry, numbers)).toEqual(expected)
    }
  )
})

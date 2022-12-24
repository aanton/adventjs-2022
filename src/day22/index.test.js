import {checkStepNumbers} from './index'

const cases = [
  {
    systemNames: ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'],
    stepNumbers: [1, 33, 10, 2, 44, 20],
    expected: true,
  },
  {
    systemNames: ['tree_1', 'tree_1', 'house'],
    stepNumbers: [2, 1, 10],
    expected: false,
  },
  {
    systemNames: [
      'house',
      'house',
      'tree_1',
      'tree_1',
      'house',
      'tree_2',
      'tree_2',
      'tree_3',
    ],
    stepNumbers: [5, 2, 1, 2, 3, 4, 5, 6],
    expected: false,
  },
]

describe('Day 22 challenge', () => {
  it.each(cases)(
    'checks the correct order of the steps of a group of systems',
    ({systemNames, stepNumbers, expected}) => {
      expect(checkStepNumbers(systemNames, stepNumbers)).toEqual(expected)
    }
  )
})

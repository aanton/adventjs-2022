import {getFilesToBackup} from './index'

const cases = [
  {
    lastBackup: 1546300800,
    changes: [
      [3, 1546301100],
      [2, 1546300800],
      [1, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
    ],
    expected: [1, 3],
  },
  {
    lastBackup: 1546300600,
    changes: [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [3, 1546301100],
    ],
    expected: [1, 2, 3],
  },
  {
    lastBackup: 1556300600,
    changes: [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [3, 1546301100],
    ],
    expected: [],
  },
  {
    lastBackup: 1556300600,
    changes: [],
    expected: [],
  },
]

describe('Day 13 challenge', () => {
  it.each(cases)(
    'gets $expected files modified after $lastBackup',
    ({lastBackup, changes, expected}) => {
      expect(getFilesToBackup(lastBackup, changes)).toEqual(expected)
    }
  )
})

import {selectSleigh} from './index'
// import {selectSleighOptimized as selectSleigh} from './index'

const cases = [
  {
    distance: 30,
    sleights: [
      {name: 'Dasher', consumption: 0.3},
      {name: 'Dancer', consumption: 0.5},
      {name: 'Rudolph', consumption: 0.7},
      {name: 'Midu', consumption: 1},
    ],
    expected: 'Dancer',
  },
  {
    distance: 1,
    sleights: [
      {name: 'pheralb', consumption: 0.3},
      {name: 'TMChein', consumption: 0.5},
    ],
    expected: 'TMChein',
  },
  {
    distance: 10,
    sleights: [
      {name: 'Pedrosillano', consumption: 1},
      {name: 'SamarJaffal', consumption: 5},
    ],
    expected: 'Pedrosillano',
  },
  {
    distance: 10,
    sleights: [
      {name: 'Pedrosillano', consumption: 1},
      {name: 'SamarJaffal', consumption: 2},
      {name: 'marcospage', consumption: 3},
    ],
    expected: 'SamarJaffal',
  },
  {
    distance: 50,
    sleights: [
      {name: 'Pedrosillano', consumption: 1},
      {name: 'SamarJaffal', consumption: 2},
      {name: 'marcospage', consumption: 3},
    ],
    expected: null,
  },
]

describe('Day 12 challenge', () => {
  it.each(cases)(
    'selects $expected as the best sleight for custom sleights and distance $distance',
    ({distance, sleights, expected}) => {
      expect(selectSleigh(distance, sleights)).toEqual(expected)
    }
  )
})

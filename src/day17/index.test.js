import {carryGifts} from './index'

const cases = [
  {
    gifts: ['game', 'bike', 'book', 'toy'],
    maxWeight: 10,
    expected: ['game bike', 'book toy'],
  },
  {
    gifts: ['game', 'bike', 'book', 'toy'],
    maxWeight: 7,
    expected: ['game', 'bike', 'book toy'],
  },
  {
    gifts: ['game', 'bike', 'book', 'toy'],
    maxWeight: 4,
    expected: ['game', 'bike', 'book', 'toy'],
  },
  {
    gifts: ['toy', 'gamme', 'toy', 'bike'],
    maxWeight: 6,
    expected: ['toy', 'gamme', 'toy', 'bike'],
  },
  {
    gifts: ['toy', 'toy', 'toy', 'toy'],
    maxWeight: 2,
    expected: [],
  },
  {
    gifts: ['toy', 'toy', 'disk', 'disk', 'toy', 'toy'],
    maxWeight: 7,
    expected: ['toy toy', 'disk', 'disk toy', 'toy'],
  },
]

describe('Day 17 challenge', () => {
  it.each(cases)(
    'groups the gifts $gifts in bags of $maxWeight max weight',
    ({gifts, maxWeight, expected}) => {
      expect(carryGifts(gifts, maxWeight)).toEqual(expected)
    }
  )
})

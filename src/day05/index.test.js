// import {getMaxGifts} from './index'
import {getMaxGiftsOptimized as getMaxGifts} from './index'

const cases = [
  {
    giftsCities: [12, 3, 11, 5, 7],
    maxGifts: 20,
    maxCities: 3,
    expected: 20,
  },
  {
    giftsCities: [50],
    maxGifts: 15,
    maxCities: 1,
    expected: 0,
  },
  {
    giftsCities: [50],
    maxGifts: 100,
    maxCities: 1,
    expected: 50,
  },
  {
    giftsCities: [50, 70],
    maxGifts: 100,
    maxCities: 1,
    expected: 70,
  },
  {
    giftsCities: [50, 70, 30],
    maxGifts: 100,
    maxCities: 2,
    expected: 100,
  },
  {
    giftsCities: [50, 70, 30],
    maxGifts: 100,
    maxCities: 3,
    expected: 100,
  },
  {
    giftsCities: [50, 10, 40, 1000, 500, 200],
    maxGifts: 199,
    maxCities: 4,
    expected: 100,
  },
  {
    giftsCities: [50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    maxGifts: 1000,
    maxCities: 1000,
    expected: 115,
  },

  // Additional cases
  {
    giftsCities: [50, 36, 72, 70, 40, 30],
    maxGifts: 109,
    maxCities: 3,
    expected: 108,
  },
]

describe('Day 5 challenge', () => {
  it.each(cases)(
    'delivers a maximum of $expected gifts for cities $giftsCities with a maximum of $maxCities cities & a total maximum of $maxGifts gifts',
    ({giftsCities, maxGifts, maxCities, expected}) => {
      expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(expected)
    }
  )
})

import distributeGifts from './index'

const cases = [
  {
    packOfGifts: ['book', 'doll', 'ball'],
    reindeers: ['dasher', 'dancer'],
    expected: 2,
  },
  {
    packOfGifts: ['a', 'b', 'c'],
    reindeers: ['d', 'e'],
    expected: 1,
  },
  {
    packOfGifts: ['videogames', 'console'],
    reindeers: ['midu'],
    expected: 0,
  },
  // prettier-ignore
  {
    packOfGifts: ['game', 'videoconsole', 'computer'],
    reindeers: ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'],
    expected: 5,
  },
  // prettier-ignore
  {
    packOfGifts: ['music'],
    reindeers: ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'],
    expected: 26,
  },
]

describe('Day 3 challenge', () => {
  it.each(cases)(
    'delivers $expected packs for gifts $packOfGifts and reindeers $reindeers',
    ({packOfGifts, reindeers, expected}) => {
      expect(distributeGifts(packOfGifts, reindeers)).toEqual(expected)
    }
  )
})

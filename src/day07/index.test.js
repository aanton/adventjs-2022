import getGiftsToRefill from './index'

const cases = [
  {store1: [], store2: [], store3: [], expected: []},
  {
    store1: ['bike', 'car', 'bike', 'bike'],
    store2: ['car', 'bike', 'doll', 'car'],
    store3: ['bike', 'pc', 'pc'],
    expected: ['doll', 'pc'],
  },
  {
    store1: ['a', 'a'],
    store2: ['b', 'b'],
    store3: ['c', 'c'],
    expected: ['a', 'b', 'c'],
  },
  {
    store1: ['a', 'b'],
    store2: ['c', 'd'],
    store3: ['e', 'f'],
    expected: ['a', 'b', 'c', 'd', 'e', 'f'],
  },
]

describe('Day 7 challenge', () => {
  it.each(cases)(
    'gets $expected gifts to be refilled when using stores $store1, $store2 & $store3',
    ({store1, store2, store3, expected}) => {
      expect(getGiftsToRefill(store1, store2, store3)).toEqual(expected)
    }
  )
})

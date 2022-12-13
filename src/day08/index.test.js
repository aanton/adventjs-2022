import {checkPart} from './index'
// import {checkPartOptimized as checkPart} from './index'

const cases = [
  {part: 'uwu', expected: true},
  {part: 'midu', expected: false},
  {part: 'miidim', expected: true},
  {part: 'lolol', expected: true},
  {part: 'yolooloy', expected: true},
  {part: 'zzzoonzzz', expected: true},
]

describe('Day 8 challenge', () => {
  it.each(cases)(
    'returns $expected when the part is $part',
    ({part, expected}) => {
      expect(checkPart(part)).toEqual(expected)
    }
  )
})

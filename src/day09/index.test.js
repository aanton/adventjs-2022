import countTime from './index'

const cases = [
  {leds: [0, 1, 1, 0, 1], expected: 7},
  {leds: [0, 0, 0, 1], expected: 21},
  {leds: [0, 0, 1, 0, 0], expected: 28},
  {leds: [1, 0, 0, 1, 0, 0], expected: 14},
  {leds: [1, 1, 0, 0, 0, 0], expected: 28},
  {leds: [1, 1, 1], expected: 0},
]

describe('Day 9 challenge', () => {
  it.each(cases)(
    'needs $expected seconds to turn on all leds in $leds',
    ({leds, expected}) => {
      expect(countTime(leds)).toEqual(expected)
    }
  )
})

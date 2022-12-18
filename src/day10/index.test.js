// import {checkJump} from './index'
import {checkJumpOptimized as checkJump} from './index'

const cases = [
  {heights: [1, 2, 1], expected: true},
  {heights: [1, 3, 8, 5, 2], expected: true},
  {heights: [1, 7, 3, 5], expected: false},
  {heights: [1, 2, 3, 2, 1], expected: true},
  {heights: [1, 2, 2, 2, 1], expected: true},
  {heights: [1, 2, 3], expected: false},
  {heights: [1, 2, 3, 2, 1, 2, 3], expected: false},
  {heights: [1, 1000, 900, 800], expected: true},
  {heights: [2, 2, 2, 2], expected: false},
]

describe('Day 10 challenge', () => {
  it.each(cases)(
    'checks the parabola jump of $heights to be $expected',
    ({heights, expected}) => {
      expect(checkJump(heights)).toEqual(expected)
    }
  )
})

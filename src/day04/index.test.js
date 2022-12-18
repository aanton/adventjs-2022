// import {fitsInOneBox} from './index'
import {fitsInOneBoxOptimized as fitsInOneBox} from './index'

describe('Day 4 challenge', () => {
  test('all boxes fits in one box', () => {
    const boxes = [
      {l: 1, w: 1, h: 1},
      {l: 2, w: 2, h: 2},
    ]
    expect(fitsInOneBox(boxes)).toEqual(true)
  })

  test('all boxes does not fit in one box', () => {
    const boxes = [
      {l: 1, w: 1, h: 10},
      {l: 3, w: 3, h: 12},
      {l: 2, w: 2, h: 1},
    ]
    expect(fitsInOneBox(boxes)).toEqual(false)
  })
})

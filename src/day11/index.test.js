import {getCompleted} from './index'
// import {getCompletedOptimized as getCompleted} from './index'

const cases = [
  {part: '01:00:00', total: '03:00:00', expected: '1/3'},
  {part: '02:00:00', total: '04:00:00', expected: '1/2'},
  {part: '01:00:00', total: '01:00:00', expected: '1/1'},
  {part: '00:10:00', total: '01:00:00', expected: '1/6'},
  {part: '00:10:10', total: '00:30:30', expected: '1/3'},
  {part: '02:20:20', total: '03:30:30', expected: '2/3'},
  {part: '03:30:30', total: '05:50:50', expected: '3/5'},
]

describe('Day 11 challenge', () => {
  it.each(cases)(
    'gets $expected completed when total is $total and working time is $part',
    ({part, total, expected}) => {
      expect(getCompleted(part, total)).toEqual(expected)
    }
  )
})

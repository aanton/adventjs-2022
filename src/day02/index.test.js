import countHours from './index'

// prettier-ignore
const cases = [
  {year: 2022, holidays: ['01/06', '04/01', '12/25'], expected: 4},
  {year: 2023, holidays: ['01/06', '04/01', '12/25'], expected: 4},
  {year: 1985, holidays: ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'], expected: 10},
  {year: 2000, holidays: ['01/01'], expected: 0},
]

describe('Day 2 challenge', () => {
  test.each(cases)(
    'gets $expected extra hours for year $year and holidays $holidays',
    ({year, holidays, expected}) => {
      expect(countHours(year, holidays)).toEqual(expected)
    }
  )
})

import {printTable} from './index'

const cases = [
  {
    gifts: [
      {name: 'PlayStation 5', quantity: 9234782374892},
      {name: 'Book Learn Web Dev', quantity: 23531},
    ],
    expected:
      '++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************',
  },
  {
    gifts: [
      {name: 'Game', quantity: 2},
      {name: 'Bike', quantity: 1},
      {name: 'Book', quantity: 3},
    ],
    expected:
      '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************',
  },
  {
    gifts: [{name: 'Game', quantity: 10000}],
    expected:
      '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************',
  },
  {
    gifts: [{name: 'Game', quantity: 1234567890}],
    expected:
      '+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************',
  },
  {
    gifts: [
      {name: 'Toy', quantity: 12},
      {name: 'Mic', quantity: 123},
    ],
    expected:
      '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************',
  },
]

describe('Day 21 challenge', () => {
  it.each(cases)('prints the table for the gifts', ({gifts, expected}) => {
    expect(printTable(gifts)).toEqual(expected)
  })
})

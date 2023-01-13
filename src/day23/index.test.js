// import {executeCommands} from './index'
import {executeCommandsOptimized as executeCommands} from './index'

// prettier-ignore
const cases = [
  {
    commands: [
      'MOV 5,V00',   // V00 is 5
      'MOV 10,V01',  // V01 is 10
      'DEC V00',     // V00 is now 4
      'ADD V00,V01', // V00 = V00 + V01 = 14
    ],
    expected: [14, 10, 0, 0, 0, 0, 0, 0],
  },
  {
    commands: [
      'MOV 255,V00', // V00 is 255
      'INC V00',     // V00 is 256, overflows to 0
      'DEC V01',     // V01 is -1, overflows to 255
      'DEC V01',     // V01 is 254
    ],
    expected: [0, 254, 0, 0, 0, 0, 0, 0],
  },
  {
    commands: [
      'MOV 10,V00', // V00 is 10
      'DEC V00',    // decrement V00 by 1  <---┐
      'INC V01',    // increment V01 by 1      |
      'JMP 1',      // loop until V00 is 0 ----┘
      'INC V06',    // increment V06 by 1
    ],
    expected: [ 0, 10, 0, 0, 0, 0, 1, 0 ],
  },
  {
    commands: [
      'MOV 10,V00',
      'MOV V00,V01',
      'MOV V01,V02',
      'MOV V02,V03',
      'MOV V03,V04'
    ],
    expected: [10, 10, 10, 10, 10, 0, 0, 0],
  },
]

describe('Day 23 challenge', () => {
  it.each(cases)(
    'executes the commands correctly in the CPU',
    ({commands, expected}) => {
      expect(executeCommands(commands)).toEqual(expected)
    }
  )
})

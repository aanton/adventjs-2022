import {fixLetter} from './index'

const cases = [
  {
    letter: '  hi    santa    claus ',
    expected: 'Hi Santa Claus.',
  },
  {
    letter: '  hi    santa    claus . santa claus is the best  ',
    expected: 'Hi Santa Claus. Santa Claus is the best.',
  },
  {
    letter: ' hi,santa claus. are you there ?   ',
    expected: 'Hi, Santa Claus. Are you there?',
  },
  {
    letter:
      ' hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  ',
    expected:
      'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.',
  },
  {
    letter:
      "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?",
    expected:
      "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?",
  },
  {
    letter: 'Hey santa Claus .  I want a bike.   I want a videogame! ',
    expected: 'Hey Santa Claus. I want a bike. I want a videogame!',
  },
]

describe('Day 16 challenge', () => {
  it.each(cases)('fixes the letter "$letter"', ({letter, expected}) => {
    expect(fixLetter(letter)).toEqual(expected)
  })
})

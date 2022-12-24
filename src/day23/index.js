/**
 * @param {string[]} commands
 * @returns {number[]}
 */
function executeCommands(commands) {
  const registers = [0, 0, 0, 0, 0, 0, 0, 0]
  let commandIndex = 0

  const ACTIONS = {
    ADD: ([index1, index2]) =>
      (registers[index1] = fixNumber(registers[index1] + registers[index2])),
    CPY: ([sourceIndex, destinationIndex]) =>
      (registers[destinationIndex] = registers[sourceIndex]),
    DEC: ([index]) => (registers[index] = fixNumber(registers[index] - 1)),
    INC: ([index]) => (registers[index] = fixNumber(registers[index] + 1)),
    JMP: ([index]) => registers[0] !== 0 && (commandIndex = index - 1),
    MOV: ([value, index]) => (registers[index] = value),
  }

  const fixNumber = number => (number + 256) % 256

  const parseCommand = command => {
    let [action, args] = command.split(' ')

    if (action === 'MOV' && args[0] === 'V') action = 'CPY'
    args = args.split(',').map(arg => Number(arg.replace('V', '')))

    return {action, args}
  }

  const parsedCommands = commands.map(parseCommand)
  while (commandIndex < parsedCommands.length) {
    const parsedCommand = parsedCommands[commandIndex]
    ACTIONS[parsedCommand.action](parsedCommand.args)

    commandIndex++
  }

  return registers
}

export {executeCommands}

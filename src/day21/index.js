/**
 * @param {{name: string, quantity: number}[]} gifts
 * @returns string
 */
function printTable(gifts) {
  const maxNameLength = Math.max(...gifts.map(gift => gift.name.length), 4)
  const maxQuantityLength = Math.max(
    ...gifts.map(gift => gift.quantity.toString().length),
    8
  )

  const printRow = (name, quantity) =>
    '| ' +
    name.padEnd(maxNameLength, ' ') +
    ' | ' +
    quantity.padEnd(maxQuantityLength, ' ') +
    ' |'

  const top = '+'.repeat(maxNameLength + maxQuantityLength + 7)
  const bottom = '*'.repeat(maxNameLength + maxQuantityLength + 7)
  const header = printRow('Gift', 'Quantity')
  const subheader = printRow(
    '-'.repeat(maxNameLength),
    '-'.repeat(maxQuantityLength)
  )

  const giftRows = gifts.map(gift =>
    printRow(gift.name, gift.quantity.toString())
  )

  return [top, header, subheader, ...giftRows, bottom].join('\n')
}

export {printTable}

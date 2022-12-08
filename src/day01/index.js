/**
 * @param {string[]} gifts
 * @returns {string[]}
 */
function wrapping(gifts) {
  return gifts.map(gift => {
    const horizontalLine = '*'.repeat(gift.length + 2)
    const giftLine = `*${gift}*`

    return [horizontalLine, giftLine, horizontalLine].join('\n')
  })
}

export default wrapping

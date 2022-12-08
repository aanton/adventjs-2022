/**
 * @param {string[]} a1
 * @param {string[]} a2
 * @param {string[]} a3
 * @returns {string[]}
 */
function getGiftsToRefill(a1, a2, a3) {
  return Object.entries(
    [...new Set(a1), ...new Set(a2), ...new Set(a3)].reduce((acc, gift) => {
      acc[gift] = (acc[gift] || 0) + 1
      return acc
    }, {})
  )
    .filter(([, stock]) => stock === 1)
    .map(([gift]) => gift)
}

export default getGiftsToRefill

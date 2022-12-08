/**
 * @param {string[]} a1
 * @param {string[]} a2
 * @param {string[]} a3
 * @returns {string[]}
 */
function getGiftsToRefill(a1, a2, a3) {
  return [...new Set([...a1, ...a2, ...a3])].filter(
    // @ts-ignore
    value => a1.includes(value) + a2.includes(value) + a3.includes(value) === 1
  )
}

export default getGiftsToRefill

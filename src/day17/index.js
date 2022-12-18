/**
 * @param {string[]} gifts
 * @param {number} maxWeight
 * @returns {string[]}
 */
function carryGifts(gifts, maxWeight) {
  if (!gifts.every(gift => gift.length <= maxWeight)) return []

  let currentBagSize = 0
  return gifts
    .reduce(
      (bags, gift) => {
        if (currentBagSize + gift.length > maxWeight) {
          bags.push([])
          currentBagSize = 0
        }

        bags.at(-1).push(gift)
        currentBagSize += gift.length

        return bags
      },
      [[]]
    )
    .map(gift => gift.join(' '))
}

export {carryGifts}

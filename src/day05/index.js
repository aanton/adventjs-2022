/**
 * @param {number[]} giftsCities
 * @param {number} maxGifts
 * @param {number} maxCities
 * @return {number}
 */
function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const allowedGiftsCities = giftsCities.filter(
    giftsCity => giftsCity <= maxGifts
  )

  if (allowedGiftsCities.length === 0) return 0
  if (allowedGiftsCities.length === 1) return allowedGiftsCities[0]
  if (maxCities === 1) return Math.max(...allowedGiftsCities)

  return Math.max(
    ...allowedGiftsCities.map(
      (giftsCity, index) =>
        giftsCity +
        getMaxGifts(
          allowedGiftsCities.slice(index + 1),
          maxGifts - giftsCity,
          maxCities - 1
        )
    )
  )
}

// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   const allowedGiftsCities = giftsCities.filter(
//     giftsCity => giftsCity <= maxGifts
//   )

//   if (allowedGiftsCities.length <= 1 || maxCities === 1)
//     return Math.max(0, ...allowedGiftsCities)

//   return Math.max(
//     ...allowedGiftsCities.map(
//       (giftsCity, index) =>
//         giftsCity +
//         getMaxGifts(
//           allowedGiftsCities.slice(index + 1),
//           maxGifts - giftsCity,
//           maxCities - 1
//         )
//     )
//   )
// }

export default getMaxGifts

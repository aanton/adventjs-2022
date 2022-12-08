function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(
    (reindeers.join('').length * 2) / packOfGifts.join('').length
  )
}

export default distributeGifts

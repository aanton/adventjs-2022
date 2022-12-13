/**
 * @param {{ l: number, w: number, h: number }[]} boxes
 * @returns boolean
 */
function fitsInOneBox(boxes) {
  const fitsInPreviousBox = (previous, next) =>
    previous.l < next.l && previous.w < next.w && previous.h < next.h

  boxes.sort((a, b) => a.l - b.l)

  for (let i = 0; i < boxes.length - 1; i++) {
    if (!fitsInPreviousBox(boxes[i], boxes[i + 1])) return false
  }

  return true
}

/**
 * @param {{ l: number, w: number, h: number }[]} boxes
 * @returns boolean
 */
function fitsInOneBoxOptimized(boxes) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every((nextBox, index, sortedBoxes) => {
      const previousBox = sortedBoxes[index - 1]

      return (
        index === 0 ||
        (previousBox.l < nextBox.l &&
          previousBox.w < nextBox.w &&
          previousBox.h < nextBox.h)
      )
    })
}

export {fitsInOneBox, fitsInOneBoxOptimized}

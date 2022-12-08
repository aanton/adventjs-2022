/**
 * @param {{ l: number, w: number, h: number }[]} boxes
 * @returns boolean
 */
function fitsInOneBox(boxes) {
  const fitsInPreviousBox = (
    /** @type {{ l: any; w: any; h: any; }} */ previous,
    /** @type {{ l: any; w: any; h: any; }} */ next
  ) => previous.l >= next.l || previous.w >= next.w || previous.h >= next.h

  boxes.sort((a, b) => a.l - b.l)

  for (let i = 0; i < boxes.length - 1; i++) {
    if (fitsInPreviousBox(boxes[i], boxes[i + 1])) return false
  }

  return true
}

export default fitsInOneBox

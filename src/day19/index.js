/**
 * @param {string[]} toys
 * @param {number[]} positions
 * @returns {string[]}
 */
function sortToys(toys, positions) {
  return toys
    .map((name, index) => ({name, index}))
    .sort((a, b) => positions[a.index] - positions[b.index])
    .map(toy => toy.name)
}

export {sortToys}

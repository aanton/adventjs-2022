/**
 * @param {number} size
 * @returns {string}
 */
function createCube(size) {
  // i: 1, 2, 3, ..., size
  const top = Array.from({length: size}, (_, i) => i + 1).map(
    i => ' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size)
  )

  // i: size, ..., 3, 2, 1
  const bottom = Array.from({length: size}, (_, i) => size - i).map(
    i => ' '.repeat(size - i) + '\\/'.repeat(i) + '_/'.repeat(size)
  )

  return [...top, ...bottom].join('\n')
}

export {createCube}

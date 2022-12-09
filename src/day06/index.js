/**
 * @param {number} size
 * @returns {string}
 */
function createCube(size) {
  const top = Array.from({length: size}, (_, i) => i + 1)
    // i: 1, 2, 3, ..., size
    .map(i => ' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size))

  const bottom = Array.from({length: size}, (_, i) => size - i)
    // i: size, ..., 3, 2, 1
    .map(i => ' '.repeat(size - i) + '\\/'.repeat(i) + '_/'.repeat(size))

  return [...top, ...bottom].join('\n')
}

export default createCube

/**
 * @param {number} size
 * @returns {string}
 */
function createCube(size) {
  const top = [],
    bottom = []

  for (let i = 1; i <= size; i++) {
    top.push(' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size))
    bottom.unshift(' '.repeat(size - i) + '\\/'.repeat(i) + '_/'.repeat(size))
  }

  return [...top, ...bottom].join('\n')
}

export default createCube

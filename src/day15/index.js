/**
 * @param {string} base
 * @returns {string[]}
 */
function decorateTree(base) {
  const rules = {
    PP: 'P',
    RR: 'R',
    BB: 'B',
    BP: 'R',
    PB: 'R',
    BR: 'P',
    RB: 'P',
    RP: 'B',
    PR: 'B',
  }

  const getTopBase = function (base) {
    const decorations = base.split(' ')

    return decorations
      .slice(1)
      .map((decoration, index) => rules[decorations[index] + decoration])
      .join(' ')
  }

  const tree = [base]
  while (base.length > 1) {
    base = getTopBase(base)
    tree.unshift(base)
  }

  return tree
}

export {decorateTree}

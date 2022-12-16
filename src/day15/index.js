/**
 * @param {string} base
 * @returns {string[]}
 */
function decorateTree(base) {
  const RULES = {
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
      .map((decoration, index) => RULES[decorations[index] + decoration])
      .join(' ')
  }

  const tree = [base]
  while (base.length > 1) {
    base = getTopBase(base)
    tree.unshift(base)
  }

  return tree
}

/**
 * @param {string} base
 * @returns {string[]}
 */
function decorateTreeOptimized(base) {
  const RULES = {
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

  const getTopBase = base =>
    Array.from(
      {length: base.length - 1},
      (_, index) => RULES[base[index] + base[index + 1]]
    )

  return [...Array(Math.floor(base.length / 2))]
    .reduce(acc => (acc.unshift(getTopBase(acc[0])), acc), [base.split(' ')])
    .map(row => row.join(' '))
}

export {decorateTree, decorateTreeOptimized}

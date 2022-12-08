/**
 * @param {string} part
 * @returns boolean
 */
function checkPart(part) {
  const isPalindrome = (/** @type {string} */ word) =>
    word === [...word].reverse().join('')

  if (isPalindrome(part)) return true

  return [...part].some((_, index) =>
    isPalindrome(part.substring(0, index) + part.substring(index + 1))
  )
}

export default checkPart

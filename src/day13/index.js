/**
 * @param {number} lastBackup
 * @param {number[][]} changes
 * @return {number[]}
 */
function getFilesToBackup(lastBackup, changes) {
  const modifiedIds = changes
    .filter(([, timestamp]) => timestamp > lastBackup)
    .map(([id]) => id)

  return [...new Set(modifiedIds)].sort((a, b) => a - b)
}

export {getFilesToBackup}

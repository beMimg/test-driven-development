function analyzeArray(arr) {
  if (arr.length === 0) return null;
  if (!Array.isArray(arr)) return null;
  if (typeof arr[0] === 'string' || typeof arr[arr.length] === 'string')
    return null;
  arr.sort((a, b) => a - b);
  const smallerItem = arr[0];
  const biggerItem = arr[arr.length - 1];
  let average = arr.reduce((prev, curr) => prev + curr, 0);
  average = average / arr.length;

  return {
    average: average,
    min: smallerItem,
    max: biggerItem,
    length: arr.length,
  };
}

module.exports = analyzeArray;

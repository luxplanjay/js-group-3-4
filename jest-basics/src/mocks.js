export const map = (arr, callback) => {
  const result = [];

  for (const element of arr) {
    result.push(callback(element));
  }

  return result;
};

export const add = (...args) => {
  const isNotValidArgType = args.some(arg => typeof arg !== 'number');

  if (isNotValidArgType) return null;

  return args.reduce((total, arg) => total + arg, 0);
};

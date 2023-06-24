export const decorateFunction = (target, functionName, descriptor) => {
  console.log('------------------------');
  console.log('target', target);
  console.log('------------------------');
  console.log('key', functionName);
  console.log('------------------------');
  console.log('descriptor', descriptor);
  console.log('------------------------');
  return {
    ...descriptor,
    writable: false,
  };
};

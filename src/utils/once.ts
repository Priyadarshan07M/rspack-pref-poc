
/**
 * once utility function
 */
export const once = (...args: any[]) => {
  console.log('once called with', args);
  // Implementation would go here
  return args;
};

/**
 * onceAsync utility function
 */
export const onceAsync = async (...args: any[]) => {
  console.log('onceAsync called with', args);
  // Implementation would go here
  return new Promise(resolve => setTimeout(() => resolve(args), 100));
};

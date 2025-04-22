
/**
 * retry utility function
 */
export const retry = (...args: any[]) => {
  console.log('retry called with', args);
  // Implementation would go here
  return args;
};

/**
 * retryAsync utility function
 */
export const retryAsync = async (...args: any[]) => {
  console.log('retryAsync called with', args);
  // Implementation would go here
  return new Promise(resolve => setTimeout(() => resolve(args), 100));
};

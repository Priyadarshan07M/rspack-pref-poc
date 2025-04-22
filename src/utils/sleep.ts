
/**
 * sleep utility function
 */
export const sleep = (...args: any[]) => {
  console.log('sleep called with', args);
  // Implementation would go here
  return args;
};

/**
 * sleepAsync utility function
 */
export const sleepAsync = async (...args: any[]) => {
  console.log('sleepAsync called with', args);
  // Implementation would go here
  return new Promise(resolve => setTimeout(() => resolve(args), 100));
};

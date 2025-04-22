
/**
 * compose utility function
 */
export const compose = (...args: any[]) => {
  console.log('compose called with', args);
  // Implementation would go here
  return args;
};

/**
 * composeAsync utility function
 */
export const composeAsync = async (...args: any[]) => {
  console.log('composeAsync called with', args);
  // Implementation would go here
  return new Promise(resolve => setTimeout(() => resolve(args), 100));
};

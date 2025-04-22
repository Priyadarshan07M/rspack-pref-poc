
/**
 * cookies utility function
 */
export const cookies = (...args: any[]) => {
  console.log('cookies called with', args);
  // Implementation would go here
  return args;
};

/**
 * cookiesAsync utility function
 */
export const cookiesAsync = async (...args: any[]) => {
  console.log('cookiesAsync called with', args);
  // Implementation would go here
  return new Promise(resolve => setTimeout(() => resolve(args), 100));
};

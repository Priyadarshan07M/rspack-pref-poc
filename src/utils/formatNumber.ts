
/**
 * formatNumber utility function
 */
export const formatNumber = (...args: any[]) => {
  console.log('formatNumber called with', args);
  // Implementation would go here
  return args;
};

/**
 * formatNumberAsync utility function
 */
export const formatNumberAsync = async (...args: any[]) => {
  console.log('formatNumberAsync called with', args);
  // Implementation would go here
  return new Promise(resolve => setTimeout(() => resolve(args), 100));
};

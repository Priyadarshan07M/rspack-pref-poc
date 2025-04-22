
/**
 * curry utility function
 */
export const curry = (...args: any[]) => {
  console.log('curry called with', args);
  // Implementation would go here
  return args;
};

/**
 * curryAsync utility function
 */
export const curryAsync = async (...args: any[]) => {
  console.log('curryAsync called with', args);
  // Implementation would go here
  return new Promise(resolve => setTimeout(() => resolve(args), 100));
};

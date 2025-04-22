
/**
 * pipe utility function
 */
export const pipe = (...args: any[]) => {
  console.log('pipe called with', args);
  // Implementation would go here
  return args;
};

/**
 * pipeAsync utility function
 */
export const pipeAsync = async (...args: any[]) => {
  console.log('pipeAsync called with', args);
  // Implementation would go here
  return new Promise(resolve => setTimeout(() => resolve(args), 100));
};

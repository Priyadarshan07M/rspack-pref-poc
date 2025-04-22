
/**
 * debounce utility function
 */
export const debounce = (...args: any[]) => {
  console.log('debounce called with', args);
  // Implementation would go here
  return args;
};

/**
 * debounceAsync utility function
 */
export const debounceAsync = async (...args: any[]) => {
  console.log('debounceAsync called with', args);
  // Implementation would go here
  return new Promise(resolve => setTimeout(() => resolve(args), 100));
};

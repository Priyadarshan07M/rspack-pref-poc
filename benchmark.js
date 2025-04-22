// benchmark.js
const { execSync } = require('child_process');
const fs = require('fs');

// Function to measure build time
function measureBuildTime(command) {
  const start = Date.now();
  try {
    execSync(command, { stdio: 'inherit' });
    const end = Date.now();
    return end - start;
  } catch (error) {
    console.error(`Error executing ${command}:`, error);
    return -1;
  }
}

// Function to get directory size
function getDirSize(dir) {
  const stats = fs.statSync(dir);
  if (!stats.isDirectory()) return stats.size;
  
  return fs.readdirSync(dir)
    .map(file => getDirSize(dir + '/' + file))
    .reduce((acc, size) => acc + size, 0);
}

// Clear previous builds
try {
  execSync('rm -rf dist-webpack dist-rspack');
} catch (error) {
  console.log('No previous builds to clean');
}

// Run Webpack build
console.log('Running Webpack build...');
const webpackTime = measureBuildTime('npm run build:webpack');
console.log(`Webpack build completed in ${webpackTime}ms`);

// Run Rspack build
console.log('\nRunning Rspack build...');
const rspackTime = measureBuildTime('npm run build:rspack');
console.log(`Rspack build completed in ${rspackTime}ms`);

// Calculate size of build outputs
const webpackSize = getDirSize('./dist-webpack');
const rspackSize = getDirSize('./dist-rspack');

// Print results
console.log('\n=== BENCHMARK RESULTS ===');
console.log(`Webpack build time: ${webpackTime}ms`);
console.log(`Rspack build time: ${rspackTime}ms`);
console.log(`Speed improvement: ${Math.round((webpackTime - rspackTime) / webpackTime * 100)}%`);
console.log(`\nWebpack build size: ${Math.round(webpackSize / 1024)}KB`);
console.log(`Rspack build size: ${Math.round(rspackSize / 1024)}KB`);
console.log(`Size difference: ${Math.round((webpackSize - rspackSize) / 1024)}KB (${Math.round((webpackSize - rspackSize) / webpackSize * 100)}%)`);
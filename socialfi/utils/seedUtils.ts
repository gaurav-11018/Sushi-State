const { v4: uuidv4 } = require('uuid');

function generateMasterSeed(): string {
  return uuidv4().replace(/-/g, '');
}

const seed = generateMasterSeed();
console.log(seed);

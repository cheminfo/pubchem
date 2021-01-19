import { getComplexity } from '../getComputedData.js';

import data from './test.json';

test('parsing complexity', () => {
  let result = getComplexity(data);
  console.log(result);
});

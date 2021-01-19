import { getBoilingPoint } from '../getExperimentalData.js';

import data from './test.json';

test('parsing experimental boiling point', () => {
  let result = getBoilingPoint(data);
  console.log(result);
});

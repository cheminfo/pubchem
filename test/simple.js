// run this code with `node -r esm test/simple.js`

import { Compound } from '../src/index.js';
import { cache } from '../src/util/cache.js';

async function doAll() {
  const compound = await Compound.fromSmiles('CCCCCBr', { cache });

  console.log(compound.getCID());

  const compoundData = await compound.getData();

  const ghs = compoundData.getGHS();
  console.log(ghs);
}

doAll();

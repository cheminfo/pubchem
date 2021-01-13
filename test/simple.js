// run this code with `node -r esm test/simple.js`

import { Compound } from '../src';
import { cache } from '../src/util/cache';

async function doAll() {
  const compound = await Compound.fromSmiles('CCCCCBr', { cache });

  console.log(compound.getCID());

  const compoundData = await compound.getData();

  const ghs = compoundData.getGHS();
  console.log(ghs);
}

doAll();

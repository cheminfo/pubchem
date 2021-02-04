import { Compound } from '../src/index.js';
import { cache } from '../src/util/cache.js';

async function doAll() {
  const compound = await Compound.fromSmiles('CCCCCBr', { cache });

  console.log(compound.getCID());

  const compoundData = await compound.getData();

  const ghs = compoundData.ghs;
  console.log(ghs);

  const detailedGHS = compoundData.getGHS();
  console.log(detailedGHS);

  const computed = compoundData.computed;

  console.log(computed);

  const experimentalData = compoundData.getExperimentalData({
    pressure: { targetUnits: 'torr' },
    temperature: { targetUnits: '°C' },
  });

  console.log(experimentalData);
}

doAll();

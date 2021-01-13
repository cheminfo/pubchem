import fetch from 'node-fetch';

import { CompoundData } from '../CompoundData';

export async function compoundDataFromCID(cid, options = {}) {
  const { cache } = options;

  let compoundData;

  if (cache && cache(cid)) {
    compoundData = cache(cid);
  } else {
    const dataResponse = await fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/compound/${cid}/JSON`,
    );
    compoundData = (await dataResponse.json()).Record;
    if (cache) {
      cache(cid, compoundData);
    }
  }

  return new CompoundData(compoundData);
}

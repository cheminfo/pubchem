import type { Options } from '../../compound/Compound.js';
import type { DataType } from '../CompoundData.js';
import { CompoundData } from '../CompoundData.js';

export async function compoundDataFromCID(
  cid: string,
  options: Pick<Options, 'cache'> = {},
) {
  const { cache } = options;

  let compoundData: DataType;

  if (cache?.(cid)) {
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

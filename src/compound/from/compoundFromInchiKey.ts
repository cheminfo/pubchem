import fetch from 'cross-fetch';

import { Compound, Options } from '../Compound';

import { checkCompundsResult } from './handleError';

export async function compoundFromInchiKey(
  inchiKey: string,
  options: Pick<Options, 'cache'> = {},
) {
  const { cache } = options;

  let compounds;

  if (cache?.(inchiKey)) {
    compounds = cache(inchiKey);
  } else {
    const encodedInchiKey = encodeURIComponent(inchiKey);
    const moleculeResponse = await fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/inchikey/${encodedInchiKey}/json`,
    );
    compounds = (await moleculeResponse.json()).PC_Compounds;
    if (cache) {
      cache(inchiKey, compounds);
    }
  }

  checkCompundsResult(compounds);

  return new Compound(compounds[0], { cache });
}

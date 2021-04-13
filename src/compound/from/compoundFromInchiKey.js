import fetch from 'node-fetch';

import { Compound } from '../Compound.js';

export async function compoundFromInchiKey(inchiKey, options = {}) {
  const { cache } = options;

  let compounds;

  if (cache && cache(inchiKey)) {
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

  if (!Array.isArray(compounds) || compounds.length === 0) {
    throw new Error('No compound found');
  }
  if (compounds.length !== 1) {
    throw new Error('More than one compound found');
  }

  return new Compound(compounds[0], { cache });
}

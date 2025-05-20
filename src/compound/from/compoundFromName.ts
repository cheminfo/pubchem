import type { Options } from '../Compound';
import { Compound } from '../Compound';

import { checkCompoundsResult } from './handleError';

export async function compoundFromName(
  smiles,
  options: Pick<Options, 'cache'> = {},
) {
  const { cache } = options;

  let compounds;

  if (cache?.(smiles)) {
    compounds = cache(smiles);
  } else {
    const encodedName = encodeURIComponent(smiles);
    const moleculeResponse = await fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodedName}/json`,
    );
    compounds = (await moleculeResponse.json()).PC_Compounds;
    if (cache) {
      cache(smiles, compounds);
    }
  }

  checkCompoundsResult(compounds);

  return new Compound(compounds[0], { cache });
}

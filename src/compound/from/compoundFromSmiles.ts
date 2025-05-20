import type { Options } from '../Compound';
import { Compound } from '../Compound';

import { checkCompoundsResult } from './handleError';

export async function compoundFromSmiles(
  smiles,
  options: Pick<Options, 'cache'> = {},
) {
  const { cache } = options;

  let compounds;

  if (cache?.(smiles)) {
    compounds = cache(smiles);
  } else {
    const encodedSmiles = encodeURIComponent(smiles);
    const moleculeResponse = await fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${encodedSmiles}/json`,
    );
    compounds = (await moleculeResponse.json()).PC_Compounds;
    if (cache) {
      cache(smiles, compounds);
    }
  }

  checkCompoundsResult(compounds);

  return new Compound(compounds[0], { cache });
}

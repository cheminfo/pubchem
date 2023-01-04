export function checkCompundsResult(compounds: Array<any>) {
  if (!Array.isArray(compounds) || compounds.length === 0) {
    throw new Error('No compound found');
  }
  if (compounds.length !== 1) {
    throw new Error('More than one compound found');
  }
  if (!('id' in compounds[0].id)) {
    throw new Error('No compound found');
  }
}

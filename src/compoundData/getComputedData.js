import jp from 'jsonpath';

function getComputedDataSection(data) {
  const computedData = jp.query(
    data,
    '$.Section[?(@.TOCHeading==="Chemical and Physical Properties")]' +
      '.Section[?(@.TOCHeading==="Computed Properties")]',
  );
  return computedData;
}

function getComputedPropertySection(data, sectionName) {
  return jp.query(
    data,
    `$.Section[?(@.TOCHeading==="${sectionName}")].Information[*]`,
  );
}

function getNumberProperties(
  data,
  sectionName,
  returnDetails = false,
  returnReferences = false,
) {
  const computationalData = getComputedDataSection(data);
  const parsedData = getComputedPropertySection(
    computationalData[0],
    sectionName,
  ).reduce((floatDict, entry) => {
    floatDict[entry.ReferenceNumber] = entry.Value.Number[0];
    return floatDict;
  }, {});
  return parsedData;
}

export function getComplexity(data) {
  const complexity = getNumberProperties(data, 'Complexity');
  console.log(complexity);
}

export function getFormalCharge(data) {
  const formalCharge = getNumberProperties(data, 'Formal Charge');
  console.log(formalCharge);
}

export function getHeavyAtomCount(data) {
  const heavyAtomCount = getNumberProperties(data, 'Heavy Atom Count');
  console.log(heavyAtomCount);
}

export function getRotableBondCount(data) {
  const rotableBondCount = getNumberProperties(data, 'Rotatable Bond Count');
  console.log(rotableBondCount);
}

export function getHydrogenBondAcceptorCount(data) {
  const hydrogenBondAcceptorCount = getNumberProperties(
    data,
    'Hydrogen Bond Acceptor Count',
  );
  console.log(hydrogenBondAcceptorCount);
}

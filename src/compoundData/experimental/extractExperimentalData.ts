import jp from 'jsonpath';

import type { Options } from '../../compound/Compound';
import type { DataType } from '../CompoundData';
import { getReferences } from '../getReferences';

export interface ExperimentalData {
  reference: any;
  data: {
    original: string;
    parsed?: any;
  };
}
export function extractExperimentalData(
  data: DataType,
  sectionName: string,
  options: Pick<Options, 'parser'> = {},
) {
  const { parser } = options;
  const references = getReferences(data);

  const experimentalSection = getExperimentalDataSection(data);

  const results: ExperimentalData[] = [];

  if (!experimentalSection || experimentalSection.length === 0) {
    return results;
  }

  jp.query(
    experimentalSection[0],
    `$.Section[?(@.TOCHeading==="${sectionName}")].Information[*]`,
  ).forEach((entry) => {
    jp.query(entry, '$.Value.StringWithMarkup[*].String').forEach(
      (original) => {
        const result: ExperimentalData = {
          reference: references[entry.ReferenceNumber],
          data: { original },
        };
        if (parser) {
          try {
            result.data.parsed = parser(original, options);
          } catch (error) {
            result.data.parsed = {
              error: error.toString(),
            };
          }
        }
        results.push(result);
      },
    );
  });
  return results;
}

export function getExperimentalDataSection(data) {
  const experimentalData = jp.query(
    data,
    '$.Section[?(@.TOCHeading==="Chemical and Physical Properties")]' +
      '.Section[?(@.TOCHeading==="Experimental Properties")]',
  );
  return experimentalData;
}

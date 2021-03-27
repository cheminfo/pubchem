import jp from 'jsonpath';

export function getComputedPropertySection(data, sectionName) {
  let returnData = jp.query(
    data,
    `$.Section[?(@.TOCHeading==="${sectionName}")].Information[*]`,
  )[0];
  returnData.Description = jp.query(
    data,
    `$.Section[?(@.TOCHeading==="${sectionName}")].Description`,
  )[0];

  return returnData;
}

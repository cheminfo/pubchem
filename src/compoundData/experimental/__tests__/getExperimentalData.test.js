import bromopentane from '../../../../data/bromopentane.json';
import penicillin from '../../../../data/penicillin.json';
import { getExperimentalData } from '../getExperimentalData.js';

describe('getExperimentalData', () => {
  it('bromopentane', () => {
    let result = getExperimentalData(bromopentane, {
      temperature: {
        targetUnits: '°K',
      },
      pressure: {
        targetUnits: 'bar',
      },
    });

    expect(result).toStrictEqual({
      boilingPoint: [
        {
          reference: {
            url: 'https://comptox.epa.gov/dashboard/DTXSID3049203',
            sourceName: 'EPA DSSTox',
            name: '1-Bromopentane',
            description:
              'DSSTox provides a high quality public chemistry resource for supporting improved predictive toxicology.',
          },
          data: {
            original: '129.8 °C',
            parsed: {
              temperature: { low: 402.95, high: undefined, units: '°K' },
              pressure: {
                low: 1.0132499968000002,
                high: undefined,
                units: 'bar',
              },
            },
          },
        },
      ],
      flashPoint: [],
      meltingPoint: [
        {
          reference: {
            url: 'https://comptox.epa.gov/dashboard/DTXSID3049203',
            sourceName: 'EPA DSSTox',
            name: '1-Bromopentane',
            description:
              'DSSTox provides a high quality public chemistry resource for supporting improved predictive toxicology.',
          },
          data: {
            original: '-95.0 °C',
            parsed: { low: 178.14999999999998, high: undefined, units: '°K' },
          },
        },
      ],
      solubility: [
        {
          reference: {
            url: 'https://comptox.epa.gov/dashboard/DTXSID3049203',
            sourceName: 'EPA DSSTox',
            name: '1-Bromopentane',
            description:
              'DSSTox provides a high quality public chemistry resource for supporting improved predictive toxicology.',
          },
          data: { original: '8.41e-04 M' },
        },
      ],
      vaporPressure: [
        {
          reference: {
            url: 'https://comptox.epa.gov/dashboard/DTXSID3049203',
            sourceName: 'EPA DSSTox',
            name: '1-Bromopentane',
            description:
              'DSSTox provides a high quality public chemistry resource for supporting improved predictive toxicology.',
          },
          data: {
            original: '12.60 mmHg',
            parsed: {
              pressure: { low: 0.016798618368, high: undefined, units: 'bar' },
              temperature: {},
            },
          },
        },
      ],
    });
  });
  it('penicillin', () => {
    let result = getExperimentalData(penicillin, {
      temperature: {
        targetUnits: '°K',
      },
      pressure: {
        targetUnits: 'bar',
      },
    });
    expect(result).toStrictEqual({
      boilingPoint: [],
      flashPoint: [],
      meltingPoint: [],
      solubility: [],
      vaporPressure: [],
    });
  });
});

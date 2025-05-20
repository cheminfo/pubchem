import { describe, expect, it } from 'vitest';

import benzene from '../../../../data/benzene.json';
import penicillin from '../../../../data/penicillin.json';
import { getExperimentalData } from '../getExperimentalData';

describe('getExperimentalData', () => {
  it('benzene', () => {
    const result = getExperimentalData(benzene, {
      temperature: {
        targetUnits: '°K',
      },
      pressure: {
        targetUnits: 'bar',
      },
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "boilingPoint": [
          {
            "data": {
              "original": "176.2 °F at 760 mmHg (NTP, 1992)",
              "parsed": {
                "pressure": {
                  "high": undefined,
                  "low": 1.0132499968000002,
                  "units": "bar",
                },
                "temperature": {
                  "high": undefined,
                  "low": 353.2611111111111,
                  "units": "°K",
                },
              },
            },
            "reference": {
              "description": "CAMEO Chemicals is a chemical database designed for people who are involved in hazardous material incident response and planning. CAMEO Chemicals contains a library with thousands of datasheets containing response-related information and recommendations for hazardous materials that are commonly transported, used, or stored in the United States. CAMEO Chemicals was developed by the National Oceanic and Atmospheric Administration's Office of Response and Restoration in partnership with the Environmental Protection Agency's Office of Emergency Management.",
              "name": "BENZENE",
              "sourceName": "CAMEO Chemicals",
              "url": "https://cameochemicals.noaa.gov/chemical/2577",
            },
          },
          {
            "data": {
              "original": "80.08 °C",
              "parsed": {
                "pressure": {
                  "high": undefined,
                  "low": 1.0132499968000002,
                  "units": "bar",
                },
                "temperature": {
                  "high": undefined,
                  "low": 353.22999999999996,
                  "units": "°K",
                },
              },
            },
            "reference": {
              "description": "The Hazardous Substances Data Bank (HSDB) is a toxicology database that focuses on the toxicology of potentially hazardous chemicals. It provides information on human exposure, industrial hygiene, emergency handling procedures, environmental fate, regulatory requirements, nanomaterials, and related areas. The information in HSDB has been assessed by a Scientific Review Panel.",
              "name": "BENZENE",
              "sourceName": "Hazardous Substances Data Bank (HSDB)",
              "url": "https://pubchem.ncbi.nlm.nih.gov/source/hsdb/35",
            },
          },
          {
            "data": {
              "original": "80.00 to 81.00 °C. @ 760.00 mm Hg",
              "parsed": {
                "error": "Error: Can not parseNumbersUnits of: 80.00 to 81.00 °C. ",
              },
            },
            "reference": {
              "description": "The Human Metabolome Database (HMDB) is a freely available electronic database containing detailed information about small molecule metabolites found in the human body.",
              "name": "Benzene",
              "sourceName": "Human Metabolome Database (HMDB)",
              "url": "http://www.hmdb.ca/metabolites/HMDB0001505",
            },
          },
          {
            "data": {
              "original": "80 °C",
              "parsed": {
                "pressure": {
                  "high": undefined,
                  "low": 1.0132499968000002,
                  "units": "bar",
                },
                "temperature": {
                  "high": undefined,
                  "low": 353.15,
                  "units": "°K",
                },
              },
            },
            "reference": {
              "description": "The International Chemical Safety Cards (ICSCs) are data sheets intended to provide essential safety and health information on chemicals in a clear and concise way. The primary aim of the Cards is to promote the safe use of chemicals in the workplace.",
              "name": "BENZENE",
              "sourceName": "ILO-WHO International Chemical Safety Cards (ICSCs)",
              "url": "https://www.ilo.org/dyn/icsc/showcard.display?p_version=2&p_card_id=0015",
            },
          },
          {
            "data": {
              "original": "176.2 °F",
              "parsed": {
                "pressure": {
                  "high": undefined,
                  "low": 1.0132499968000002,
                  "units": "bar",
                },
                "temperature": {
                  "high": undefined,
                  "low": 353.2611111111111,
                  "units": "°K",
                },
              },
            },
            "reference": {
              "description": "The OSHA Occupational Chemical Database contains over 800 entries with information such as physical properties, exposure guidelines, etc.",
              "name": "BENZENE",
              "sourceName": "Occupational Safety and Health Administration (OSHA)",
              "url": "https://www.osha.gov/chemicaldata/491",
            },
          },
          {
            "data": {
              "original": "176 °F",
              "parsed": {
                "pressure": {
                  "high": undefined,
                  "low": 1.0132499968000002,
                  "units": "bar",
                },
                "temperature": {
                  "high": undefined,
                  "low": 353.15000000000003,
                  "units": "°K",
                },
              },
            },
            "reference": {
              "description": "The NIOSH Pocket Guide to Chemical Hazards is intended as a source of general industrial hygiene information on several hundred chemicals/classes for workers, employers, and occupational health professionals. Read more: https://www.cdc.gov/niosh/npg/",
              "name": "Benzene",
              "sourceName": "The National Institute for Occupational Safety and Health (NIOSH)",
              "url": "https://www.cdc.gov/niosh/npg/npgd0049.html",
            },
          },
        ],
        "density": [
          {
            "data": {
              "original": "0.879 at 68 °F (USCG, 1999) - Less dense than water; will float",
              "parsed": {
                "temperature": {
                  "high": undefined,
                  "low": 293.15000000000003,
                  "units": "°K",
                },
                "value": {
                  "high": undefined,
                  "low": 0.879,
                  "units": undefined,
                },
              },
            },
            "reference": {
              "description": "CAMEO Chemicals is a chemical database designed for people who are involved in hazardous material incident response and planning. CAMEO Chemicals contains a library with thousands of datasheets containing response-related information and recommendations for hazardous materials that are commonly transported, used, or stored in the United States. CAMEO Chemicals was developed by the National Oceanic and Atmospheric Administration's Office of Response and Restoration in partnership with the Environmental Protection Agency's Office of Emergency Management.",
              "name": "BENZENE",
              "sourceName": "CAMEO Chemicals",
              "url": "https://cameochemicals.noaa.gov/chemical/2577",
            },
          },
          {
            "data": {
              "original": "0.8756 g/cu cm at 20 °C",
              "parsed": {
                "temperature": {
                  "high": undefined,
                  "low": 293.15,
                  "units": "°K",
                },
                "value": {
                  "high": undefined,
                  "low": 0.8756,
                  "units": "g/cm^3",
                },
              },
            },
            "reference": {
              "description": "The Hazardous Substances Data Bank (HSDB) is a toxicology database that focuses on the toxicology of potentially hazardous chemicals. It provides information on human exposure, industrial hygiene, emergency handling procedures, environmental fate, regulatory requirements, nanomaterials, and related areas. The information in HSDB has been assessed by a Scientific Review Panel.",
              "name": "BENZENE",
              "sourceName": "Hazardous Substances Data Bank (HSDB)",
              "url": "https://pubchem.ncbi.nlm.nih.gov/source/hsdb/35",
            },
          },
          {
            "data": {
              "original": "SPECIFIC DISPERSION 189.6; DENSITY OF SATURATED VAPOR-AIR MIXT AT 760 MM HG (AIR= 1) IS 1.22 AT 26 °C; PERCENT IN SATURATED IN AIR AT 760 MM HG IS 13.15 AT 26 °C",
              "parsed": {
                "error": "Error: Can not parseNumbersUnits of: SPECIFIC DISPERSION 189.6; DENSITY OF SATURATED VAPOR-AIR MIXT AT 760 MM HG ",
              },
            },
            "reference": {
              "description": "The Hazardous Substances Data Bank (HSDB) is a toxicology database that focuses on the toxicology of potentially hazardous chemicals. It provides information on human exposure, industrial hygiene, emergency handling procedures, environmental fate, regulatory requirements, nanomaterials, and related areas. The information in HSDB has been assessed by a Scientific Review Panel.",
              "name": "BENZENE",
              "sourceName": "Hazardous Substances Data Bank (HSDB)",
              "url": "https://pubchem.ncbi.nlm.nih.gov/source/hsdb/35",
            },
          },
          {
            "data": {
              "original": "Relative density (water = 1): 0.88",
              "parsed": {
                "error": "Error: Can not parseNumbersUnits of: Relative density ",
              },
            },
            "reference": {
              "description": "The International Chemical Safety Cards (ICSCs) are data sheets intended to provide essential safety and health information on chemicals in a clear and concise way. The primary aim of the Cards is to promote the safe use of chemicals in the workplace.",
              "name": "BENZENE",
              "sourceName": "ILO-WHO International Chemical Safety Cards (ICSCs)",
              "url": "https://www.ilo.org/dyn/icsc/showcard.display?p_version=2&p_card_id=0015",
            },
          },
          {
            "data": {
              "original": "0.88",
              "parsed": {
                "error": "Error: Can not parseNumbersUnits of: ",
              },
            },
            "reference": {
              "description": "The OSHA Occupational Chemical Database contains over 800 entries with information such as physical properties, exposure guidelines, etc.",
              "name": "BENZENE",
              "sourceName": "Occupational Safety and Health Administration (OSHA)",
              "url": "https://www.osha.gov/chemicaldata/491",
            },
          },
          {
            "data": {
              "original": "0.88",
              "parsed": {
                "error": "Error: Can not parseNumbersUnits of: ",
              },
            },
            "reference": {
              "description": "The NIOSH Pocket Guide to Chemical Hazards is intended as a source of general industrial hygiene information on several hundred chemicals/classes for workers, employers, and occupational health professionals. Read more: https://www.cdc.gov/niosh/npg/",
              "name": "Benzene",
              "sourceName": "The National Institute for Occupational Safety and Health (NIOSH)",
              "url": "https://www.cdc.gov/niosh/npg/npgd0049.html",
            },
          },
        ],
        "flashPoint": [
          {
            "data": {
              "original": "12 °F (NTP, 1992)",
              "parsed": {
                "high": undefined,
                "low": 262.0388888888889,
                "units": "°K",
              },
            },
            "reference": {
              "description": "CAMEO Chemicals is a chemical database designed for people who are involved in hazardous material incident response and planning. CAMEO Chemicals contains a library with thousands of datasheets containing response-related information and recommendations for hazardous materials that are commonly transported, used, or stored in the United States. CAMEO Chemicals was developed by the National Oceanic and Atmospheric Administration's Office of Response and Restoration in partnership with the Environmental Protection Agency's Office of Emergency Management.",
              "name": "BENZENE",
              "sourceName": "CAMEO Chemicals",
              "url": "https://cameochemicals.noaa.gov/chemical/2577",
            },
          },
          {
            "data": {
              "original": "12 °F",
              "parsed": {
                "high": undefined,
                "low": 262.0388888888889,
                "units": "°K",
              },
            },
            "reference": {
              "description": "Haz-Map® is an occupational health database designed for health and safety professionals and for consumers seeking information about the adverse effects of workplace exposures to chemical and biological agents.",
              "name": "Benzene",
              "sourceName": "Haz-Map, Information on Hazardous Chemicals and Occupational Diseases",
              "url": "https://haz-map.com/Agents/5",
            },
          },
          {
            "data": {
              "original": "12 °F (-11 °C) Closed Cup",
              "parsed": {
                "high": undefined,
                "low": 262.0388888888889,
                "units": "°K",
              },
            },
            "reference": {
              "description": "The Hazardous Substances Data Bank (HSDB) is a toxicology database that focuses on the toxicology of potentially hazardous chemicals. It provides information on human exposure, industrial hygiene, emergency handling procedures, environmental fate, regulatory requirements, nanomaterials, and related areas. The information in HSDB has been assessed by a Scientific Review Panel.",
              "name": "BENZENE",
              "sourceName": "Hazardous Substances Data Bank (HSDB)",
              "url": "https://pubchem.ncbi.nlm.nih.gov/source/hsdb/35",
            },
          },
          {
            "data": {
              "original": "-11.0 °C (12.2 °F) (Closed cup)",
              "parsed": {
                "high": undefined,
                "low": 262.15,
                "units": "°K",
              },
            },
            "reference": {
              "description": "The Hazardous Substances Data Bank (HSDB) is a toxicology database that focuses on the toxicology of potentially hazardous chemicals. It provides information on human exposure, industrial hygiene, emergency handling procedures, environmental fate, regulatory requirements, nanomaterials, and related areas. The information in HSDB has been assessed by a Scientific Review Panel.",
              "name": "BENZENE",
              "sourceName": "Hazardous Substances Data Bank (HSDB)",
              "url": "https://pubchem.ncbi.nlm.nih.gov/source/hsdb/35",
            },
          },
          {
            "data": {
              "original": "-11 °C c.c.",
              "parsed": {
                "error": "Error: Can not parseNumbersUnits of: -11 °C c.c.",
              },
            },
            "reference": {
              "description": "The International Chemical Safety Cards (ICSCs) are data sheets intended to provide essential safety and health information on chemicals in a clear and concise way. The primary aim of the Cards is to promote the safe use of chemicals in the workplace.",
              "name": "BENZENE",
              "sourceName": "ILO-WHO International Chemical Safety Cards (ICSCs)",
              "url": "https://www.ilo.org/dyn/icsc/showcard.display?p_version=2&p_card_id=0015",
            },
          },
          {
            "data": {
              "original": "12 °F",
              "parsed": {
                "high": undefined,
                "low": 262.0388888888889,
                "units": "°K",
              },
            },
            "reference": {
              "description": "The OSHA Occupational Chemical Database contains over 800 entries with information such as physical properties, exposure guidelines, etc.",
              "name": "BENZENE",
              "sourceName": "Occupational Safety and Health Administration (OSHA)",
              "url": "https://www.osha.gov/chemicaldata/491",
            },
          },
          {
            "data": {
              "original": "12 °F",
              "parsed": {
                "high": undefined,
                "low": 262.0388888888889,
                "units": "°K",
              },
            },
            "reference": {
              "description": "The NIOSH Pocket Guide to Chemical Hazards is intended as a source of general industrial hygiene information on several hundred chemicals/classes for workers, employers, and occupational health professionals. Read more: https://www.cdc.gov/niosh/npg/",
              "name": "Benzene",
              "sourceName": "The National Institute for Occupational Safety and Health (NIOSH)",
              "url": "https://www.cdc.gov/niosh/npg/npgd0049.html",
            },
          },
        ],
        "meltingPoint": [
          {
            "data": {
              "original": "41.9 °F (NTP, 1992)",
              "parsed": {
                "high": undefined,
                "low": 278.65,
                "units": "°K",
              },
            },
            "reference": {
              "description": "CAMEO Chemicals is a chemical database designed for people who are involved in hazardous material incident response and planning. CAMEO Chemicals contains a library with thousands of datasheets containing response-related information and recommendations for hazardous materials that are commonly transported, used, or stored in the United States. CAMEO Chemicals was developed by the National Oceanic and Atmospheric Administration's Office of Response and Restoration in partnership with the Environmental Protection Agency's Office of Emergency Management.",
              "name": "BENZENE",
              "sourceName": "CAMEO Chemicals",
              "url": "https://cameochemicals.noaa.gov/chemical/2577",
            },
          },
          {
            "data": {
              "original": "5.558 °C",
              "parsed": {
                "high": undefined,
                "low": 278.70799999999997,
                "units": "°K",
              },
            },
            "reference": {
              "description": "The Hazardous Substances Data Bank (HSDB) is a toxicology database that focuses on the toxicology of potentially hazardous chemicals. It provides information on human exposure, industrial hygiene, emergency handling procedures, environmental fate, regulatory requirements, nanomaterials, and related areas. The information in HSDB has been assessed by a Scientific Review Panel.",
              "name": "BENZENE",
              "sourceName": "Hazardous Substances Data Bank (HSDB)",
              "url": "https://pubchem.ncbi.nlm.nih.gov/source/hsdb/35",
            },
          },
          {
            "data": {
              "original": "5.5 °C",
              "parsed": {
                "high": undefined,
                "low": 278.65,
                "units": "°K",
              },
            },
            "reference": {
              "description": "The Human Metabolome Database (HMDB) is a freely available electronic database containing detailed information about small molecule metabolites found in the human body.",
              "name": "Benzene",
              "sourceName": "Human Metabolome Database (HMDB)",
              "url": "http://www.hmdb.ca/metabolites/HMDB0001505",
            },
          },
          {
            "data": {
              "original": "6 °C",
              "parsed": {
                "high": undefined,
                "low": 279.15,
                "units": "°K",
              },
            },
            "reference": {
              "description": "The International Chemical Safety Cards (ICSCs) are data sheets intended to provide essential safety and health information on chemicals in a clear and concise way. The primary aim of the Cards is to promote the safe use of chemicals in the workplace.",
              "name": "BENZENE",
              "sourceName": "ILO-WHO International Chemical Safety Cards (ICSCs)",
              "url": "https://www.ilo.org/dyn/icsc/showcard.display?p_version=2&p_card_id=0015",
            },
          },
          {
            "data": {
              "original": "41.9 °F",
              "parsed": {
                "high": undefined,
                "low": 278.65,
                "units": "°K",
              },
            },
            "reference": {
              "description": "The OSHA Occupational Chemical Database contains over 800 entries with information such as physical properties, exposure guidelines, etc.",
              "name": "BENZENE",
              "sourceName": "Occupational Safety and Health Administration (OSHA)",
              "url": "https://www.osha.gov/chemicaldata/491",
            },
          },
          {
            "data": {
              "original": "42 °F",
              "parsed": {
                "high": undefined,
                "low": 278.7055555555555,
                "units": "°K",
              },
            },
            "reference": {
              "description": "The NIOSH Pocket Guide to Chemical Hazards is intended as a source of general industrial hygiene information on several hundred chemicals/classes for workers, employers, and occupational health professionals. Read more: https://www.cdc.gov/niosh/npg/",
              "name": "Benzene",
              "sourceName": "The National Institute for Occupational Safety and Health (NIOSH)",
              "url": "https://www.cdc.gov/niosh/npg/npgd0049.html",
            },
          },
        ],
        "refractiveIndex": [
          {
            "data": {
              "original": "Index of refraction: 1.5011 at 20 °C/D",
              "parsed": {
                "temperature": {
                  "high": undefined,
                  "low": 20,
                  "units": "°C",
                },
                "value": {
                  "high": undefined,
                  "low": 1.5011,
                  "units": undefined,
                },
              },
            },
            "reference": {
              "description": "The Hazardous Substances Data Bank (HSDB) is a toxicology database that focuses on the toxicology of potentially hazardous chemicals. It provides information on human exposure, industrial hygiene, emergency handling procedures, environmental fate, regulatory requirements, nanomaterials, and related areas. The information in HSDB has been assessed by a Scientific Review Panel.",
              "name": "BENZENE",
              "sourceName": "Hazardous Substances Data Bank (HSDB)",
              "url": "https://pubchem.ncbi.nlm.nih.gov/source/hsdb/35",
            },
          },
        ],
        "solubility": [
          {
            "data": {
              "original": "1 to 5 mg/mL at 64 °F (NTP, 1992)",
            },
            "reference": {
              "description": "CAMEO Chemicals is a chemical database designed for people who are involved in hazardous material incident response and planning. CAMEO Chemicals contains a library with thousands of datasheets containing response-related information and recommendations for hazardous materials that are commonly transported, used, or stored in the United States. CAMEO Chemicals was developed by the National Oceanic and Atmospheric Administration's Office of Response and Restoration in partnership with the Environmental Protection Agency's Office of Emergency Management.",
              "name": "BENZENE",
              "sourceName": "CAMEO Chemicals",
              "url": "https://cameochemicals.noaa.gov/chemical/2577",
            },
          },
          {
            "data": {
              "original": "In water, 1.79X10+3 mg/L at 25 °C",
            },
            "reference": {
              "description": "The Hazardous Substances Data Bank (HSDB) is a toxicology database that focuses on the toxicology of potentially hazardous chemicals. It provides information on human exposure, industrial hygiene, emergency handling procedures, environmental fate, regulatory requirements, nanomaterials, and related areas. The information in HSDB has been assessed by a Scientific Review Panel.",
              "name": "BENZENE",
              "sourceName": "Hazardous Substances Data Bank (HSDB)",
              "url": "https://pubchem.ncbi.nlm.nih.gov/source/hsdb/35",
            },
          },
          {
            "data": {
              "original": "Miscible with alcohol, chloroform, ether, carbon disulfide, acetone, oils, carbon tetrachloride, and glacial acetic acid",
            },
            "reference": {
              "description": "The Hazardous Substances Data Bank (HSDB) is a toxicology database that focuses on the toxicology of potentially hazardous chemicals. It provides information on human exposure, industrial hygiene, emergency handling procedures, environmental fate, regulatory requirements, nanomaterials, and related areas. The information in HSDB has been assessed by a Scientific Review Panel.",
              "name": "BENZENE",
              "sourceName": "Hazardous Substances Data Bank (HSDB)",
              "url": "https://pubchem.ncbi.nlm.nih.gov/source/hsdb/35",
            },
          },
          {
            "data": {
              "original": "Miscible with ethanol, ethyl ether, acetone, chloroform; coluble in carbon tetrachloride",
            },
            "reference": {
              "description": "The Hazardous Substances Data Bank (HSDB) is a toxicology database that focuses on the toxicology of potentially hazardous chemicals. It provides information on human exposure, industrial hygiene, emergency handling procedures, environmental fate, regulatory requirements, nanomaterials, and related areas. The information in HSDB has been assessed by a Scientific Review Panel.",
              "name": "BENZENE",
              "sourceName": "Hazardous Substances Data Bank (HSDB)",
              "url": "https://pubchem.ncbi.nlm.nih.gov/source/hsdb/35",
            },
          },
          {
            "data": {
              "original": "1.79 mg/mL",
            },
            "reference": {
              "description": "The Human Metabolome Database (HMDB) is a freely available electronic database containing detailed information about small molecule metabolites found in the human body.",
              "name": "Benzene",
              "sourceName": "Human Metabolome Database (HMDB)",
              "url": "http://www.hmdb.ca/metabolites/HMDB0001505",
            },
          },
          {
            "data": {
              "original": "Solubility in water, g/100ml at 25 °C: 0.18",
            },
            "reference": {
              "description": "The International Chemical Safety Cards (ICSCs) are data sheets intended to provide essential safety and health information on chemicals in a clear and concise way. The primary aim of the Cards is to promote the safe use of chemicals in the workplace.",
              "name": "BENZENE",
              "sourceName": "ILO-WHO International Chemical Safety Cards (ICSCs)",
              "url": "https://www.ilo.org/dyn/icsc/showcard.display?p_version=2&p_card_id=0015",
            },
          },
          {
            "data": {
              "original": "0.07%",
            },
            "reference": {
              "description": "The NIOSH Pocket Guide to Chemical Hazards is intended as a source of general industrial hygiene information on several hundred chemicals/classes for workers, employers, and occupational health professionals. Read more: https://www.cdc.gov/niosh/npg/",
              "name": "Benzene",
              "sourceName": "The National Institute for Occupational Safety and Health (NIOSH)",
              "url": "https://www.cdc.gov/niosh/npg/npgd0049.html",
            },
          },
        ],
        "vaporPressure": [
          {
            "data": {
              "original": "60 mmHg at 59 °F ; 76 mmHg at 68 °F (NTP, 1992)",
              "parsed": {
                "error": "Error: Can not parseNumbersUnits of: 59 °F ; 76 mmHg",
              },
            },
            "reference": {
              "description": "CAMEO Chemicals is a chemical database designed for people who are involved in hazardous material incident response and planning. CAMEO Chemicals contains a library with thousands of datasheets containing response-related information and recommendations for hazardous materials that are commonly transported, used, or stored in the United States. CAMEO Chemicals was developed by the National Oceanic and Atmospheric Administration's Office of Response and Restoration in partnership with the Environmental Protection Agency's Office of Emergency Management.",
              "name": "BENZENE",
              "sourceName": "CAMEO Chemicals",
              "url": "https://cameochemicals.noaa.gov/chemical/2577",
            },
          },
          {
            "data": {
              "original": "94.8 [mmHg]",
              "parsed": {
                "error": "Error: Can not parseNumbersUnits of: 94.8 [mmHg]",
              },
            },
            "reference": {
              "description": "Haz-Map® is an occupational health database designed for health and safety professionals and for consumers seeking information about the adverse effects of workplace exposures to chemical and biological agents.",
              "name": "Benzene",
              "sourceName": "Haz-Map, Information on Hazardous Chemicals and Occupational Diseases",
              "url": "https://haz-map.com/Agents/5",
            },
          },
          {
            "data": {
              "original": "94.8 mm Hg at 25 °C",
              "parsed": {
                "pressure": {
                  "high": undefined,
                  "low": 0.126389604864,
                  "units": "bar",
                },
                "temperature": {
                  "high": undefined,
                  "low": 298.15,
                  "units": "°K",
                },
              },
            },
            "reference": {
              "description": "The Hazardous Substances Data Bank (HSDB) is a toxicology database that focuses on the toxicology of potentially hazardous chemicals. It provides information on human exposure, industrial hygiene, emergency handling procedures, environmental fate, regulatory requirements, nanomaterials, and related areas. The information in HSDB has been assessed by a Scientific Review Panel.",
              "name": "BENZENE",
              "sourceName": "Hazardous Substances Data Bank (HSDB)",
              "url": "https://pubchem.ncbi.nlm.nih.gov/source/hsdb/35",
            },
          },
          {
            "data": {
              "original": "Vapor pressure, kPa at 20 °C: 10",
              "parsed": {
                "error": "Error: Can not parseNumbersUnits of: Vapor pressure",
              },
            },
            "reference": {
              "description": "The International Chemical Safety Cards (ICSCs) are data sheets intended to provide essential safety and health information on chemicals in a clear and concise way. The primary aim of the Cards is to promote the safe use of chemicals in the workplace.",
              "name": "BENZENE",
              "sourceName": "ILO-WHO International Chemical Safety Cards (ICSCs)",
              "url": "https://www.ilo.org/dyn/icsc/showcard.display?p_version=2&p_card_id=0015",
            },
          },
          {
            "data": {
              "original": "75 mmHg",
              "parsed": {
                "pressure": {
                  "high": undefined,
                  "low": 0.099991776,
                  "units": "bar",
                },
                "temperature": {},
              },
            },
            "reference": {
              "description": "The OSHA Occupational Chemical Database contains over 800 entries with information such as physical properties, exposure guidelines, etc.",
              "name": "BENZENE",
              "sourceName": "Occupational Safety and Health Administration (OSHA)",
              "url": "https://www.osha.gov/chemicaldata/491",
            },
          },
          {
            "data": {
              "original": "75 mmHg",
              "parsed": {
                "pressure": {
                  "high": undefined,
                  "low": 0.099991776,
                  "units": "bar",
                },
                "temperature": {},
              },
            },
            "reference": {
              "description": "The NIOSH Pocket Guide to Chemical Hazards is intended as a source of general industrial hygiene information on several hundred chemicals/classes for workers, employers, and occupational health professionals. Read more: https://www.cdc.gov/niosh/npg/",
              "name": "Benzene",
              "sourceName": "The National Institute for Occupational Safety and Health (NIOSH)",
              "url": "https://www.cdc.gov/niosh/npg/npgd0049.html",
            },
          },
        ],
      }
    `);
  });
  it('penicillin', () => {
    const result = getExperimentalData(penicillin, {
      temperature: {
        targetUnits: '°K',
      },
      pressure: {
        targetUnits: 'bar',
      },
    });
    expect(result).toStrictEqual({
      boilingPoint: [],
      density: [],
      flashPoint: [],
      meltingPoint: [],
      solubility: [],
      vaporPressure: [],
      refractiveIndex: [],
    });
  });
});

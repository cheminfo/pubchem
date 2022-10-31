# Changelog

## [0.9.3](https://github.com/cheminfo/pubchem/compare/v0.9.2...v0.9.3) (2022-10-31)


### Bug Fixes

* add the correct code for P statements ([2fa5d16](https://github.com/cheminfo/pubchem/commit/2fa5d16e2c3370d9cb8fb2fe7de010ac26704e22))

## [0.9.2](https://github.com/cheminfo/pubchem/compare/v0.9.1...v0.9.2) (2022-08-29)


### Bug Fixes

* correctly look for InChIKey and not 'InChI Key' ([cf46505](https://github.com/cheminfo/pubchem/commit/cf465055869d18e2fbf21fecde8052eea983ece3))

## [0.9.1](https://github.com/cheminfo/pubchem/compare/v0.9.0...v0.9.1) (2022-08-29)

### Bug Fixes

- crash when no experimental data ([acc6d31](https://github.com/cheminfo/pubchem/commit/acc6d3107bac826e4e96591081465078ee6117df))

## [0.9.0](https://www.github.com/cheminfo/pubchem/compare/v0.8.0...v0.9.0) (2021-04-29)

### Features

- reformat identifier result ([#44](https://www.github.com/cheminfo/pubchem/issues/44)) ([5adb865](https://www.github.com/cheminfo/pubchem/commit/5adb8655f5de7a7064d78ab1d3879b4a1f2a05e6))

## [0.8.0](https://www.github.com/cheminfo/pubchem/compare/v0.7.0...v0.8.0) (2021-04-29)

### Features

- get identifier summary ([#42](https://www.github.com/cheminfo/pubchem/issues/42)) ([c023a61](https://www.github.com/cheminfo/pubchem/commit/c023a61da4f04991f71096f42e479d48981eeba2))

## [0.7.0](https://www.github.com/cheminfo/pubchem/compare/v0.6.0...v0.7.0) (2021-04-27)

### Features

- add InChI ([c4145ba](https://www.github.com/cheminfo/pubchem/commit/c4145ba0224b4b9a425620c410385d21b7ee2843))
- add InChIKey ([9eb4b99](https://www.github.com/cheminfo/pubchem/commit/9eb4b99e225485e3be0b34c6eef706715731b165))
- added smiles ([9d75c8e](https://www.github.com/cheminfo/pubchem/commit/9d75c8e731020d45a2ce3897d28ef66d1623c44e))

## [0.6.0](https://www.github.com/cheminfo/pubchem/compare/v0.5.0...v0.6.0) (2021-04-13)

### Features

- add inchikey lookup ([#35](https://www.github.com/cheminfo/pubchem/issues/35)) ([2fc1931](https://www.github.com/cheminfo/pubchem/commit/2fc19316b2d47d75cb1bfa94f64f3429e6de3fa1))

### Bug Fixes

- throw error in case SMILES is not found ([#38](https://www.github.com/cheminfo/pubchem/issues/38)) ([ff76f9f](https://www.github.com/cheminfo/pubchem/commit/ff76f9fbb185041f4baef852d9640e002b576471))

## [0.5.0](https://www.github.com/cheminfo/pubchem/compare/v0.4.1...v0.5.0) (2021-03-27)

### Features

- get description from pubchem instead of hard coding ([#33](https://www.github.com/cheminfo/pubchem/issues/33)) ([94cfb50](https://www.github.com/cheminfo/pubchem/commit/94cfb50887973ced4007e857b3d52ac051c4fdb4))

### [0.4.1](https://www.github.com/cheminfo/pubchem/compare/v0.4.0...v0.4.1) (2021-03-12)

### Bug Fixes

- getGHS fails gracefully ([0cbec1c](https://www.github.com/cheminfo/pubchem/commit/0cbec1cd573a913b4fb206f7c6863581e0731179))

## [0.4.0](https://www.github.com/cheminfo/pubchem/compare/v0.3.2...v0.4.0) (2021-02-08)

### Features

- add label in computed properties ([9ad31f1](https://www.github.com/cheminfo/pubchem/commit/9ad31f1e0cfe245e7c4eda4ed07712076a6c4b0f))

### Bug Fixes

- wrong property name getHydrogenBondAcceptorCount ([f47b079](https://www.github.com/cheminfo/pubchem/commit/f47b079e1bf4eb3f470d34dac0ac54c6b7179023))

### [0.3.2](https://www.github.com/cheminfo/pubchem/compare/v0.3.1...v0.3.2) (2021-02-06)

### Bug Fixes

- publish lib folder ([a2472b0](https://www.github.com/cheminfo/pubchem/commit/a2472b0e432704862591a6ade2e813a218108c9e))

### [0.3.1](https://www.github.com/cheminfo/pubchem/compare/v0.3.0...v0.3.1) (2021-02-05)

### Bug Fixes

- support commonjs ([d7aac0e](https://www.github.com/cheminfo/pubchem/commit/d7aac0eb349d935dabb7e22a644ab06922798ff1))

## [0.3.0](https://www.github.com/cheminfo/pubchem/compare/v0.2.0...v0.3.0) (2021-02-04)

### Features

- refactor to parse the experimentaData with references and units conversion ([6945fc7](https://www.github.com/cheminfo/pubchem/commit/6945fc760d7251c285479a4c57378ede20cfba85))

## [0.2.0](https://www.github.com/cheminfo/pubchem/compare/v0.1.0...v0.2.0) (2021-01-29)

### Features

- add toJSON ([c102657](https://www.github.com/cheminfo/pubchem/commit/c102657695f1c3c103d1057cbcb28ab14ab57fa6))
- refactor getGHS and add getGHSSummary ([103ecbc](https://www.github.com/cheminfo/pubchem/commit/103ecbced961f60b1cae2cac6a530078a6f1edb3))
- start refactor to have get and methods ([adaea71](https://www.github.com/cheminfo/pubchem/commit/adaea71f838e445237e44de2afe4a41deb985496))

## [0.1.0](https://www.github.com/cheminfo/pubchem/compare/v0.0.3...v0.1.0) (2021-01-26)

### ⚠ BREAKING CHANGES

- migrate to native ESM (#9)

### Features

- add ghs pictograms URL ([1fff442](https://www.github.com/cheminfo/pubchem/commit/1fff442957c0ec1c43b6f1cddd52e528ab72538b))
- get methods for the compound properties in compoundData ([#14](https://www.github.com/cheminfo/pubchem/issues/14)) ([51b778e](https://www.github.com/cheminfo/pubchem/commit/51b778e8f524a1c2d061e78b17b470b4db0ce494))
- migrate to native ESM ([#9](https://www.github.com/cheminfo/pubchem/issues/9)) ([4b763d9](https://www.github.com/cheminfo/pubchem/commit/4b763d9b3a8554f72da4fc5ca2c904a11b4ff4e2))

### [0.0.3](https://www.github.com/cheminfo/pubchem/compare/v0.0.2...v0.0.3) (2021-01-13)

### Bug Fixes

- add missing cheminfo-build dev dependency ([f25a5b8](https://www.github.com/cheminfo/pubchem/commit/f25a5b8e878d187a31d836ed33fe006234d44afb))

### [0.0.2](https://www.github.com/cheminfo/pubchem/compare/v0.0.1...v0.0.2) (2021-01-13)

### Bug Fixes

- missing build script ([601620d](https://www.github.com/cheminfo/pubchem/commit/601620d93ebef32508fa66c39cc05a15d488aaa6))

### 0.0.1 (2021-01-13)

### Bug Fixes

- improve documentation ([660b3ed](https://www.github.com/cheminfo/pubchem/commit/660b3edc2b4500ef2b9841e94d1618308478fb22))

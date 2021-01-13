# pubchem

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Simplify the retrieval of information from PubChem using PubChem JSON API.

## Installation

`$ npm i pubchem`

## Usage

```js
import { Compound } from 'pubchem';

async function doAll() {
  const compound = await Compound.fromSmiles('CCCCCBr', { cache });

  console.log(compound.getCID());

  const compoundData = await compound.getData();

  const ghs = compoundData.getGHS();
  console.log(ghs);
}

doAll();
```

You can run a working example using:

`node -r esm test/simple.js`

## [API Documentation](https://cheminfo.github.io/pubchem/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/pubchem.svg
[npm-url]: https://www.npmjs.com/package/pubchem
[ci-image]: https://github.com/cheminfo/pubchem/workflows/Node.js%20CI/badge.svg?branch=master
[ci-url]: https://github.com/cheminfo/pubchem/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/pubchem.svg
[codecov-url]: https://codecov.io/gh/cheminfo/pubchem
[download-image]: https://img.shields.io/npm/dm/pubchem.svg
[download-url]: https://www.npmjs.com/package/pubchem

# pubchem-proxy

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Simplify the retrieval of information from PubChem

## Installation

`$ npm i pubchem-proxy`

## Usage

```js
import { Compound } from 'pubchem-proxy';

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

## [API Documentation](https://cheminfo.github.io/pubchem-proxy/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/pubchem-proxy.svg
[npm-url]: https://www.npmjs.com/package/pubchem-proxy
[ci-image]: https://github.com/cheminfo/pubchem-proxy/workflows/Node.js%20CI/badge.svg?branch=master
[ci-url]: https://github.com/cheminfo/pubchem-proxy/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/pubchem-proxy.svg
[codecov-url]: https://codecov.io/gh/cheminfo/pubchem-proxy
[download-image]: https://img.shields.io/npm/dm/pubchem-proxy.svg
[download-url]: https://www.npmjs.com/package/pubchem-proxy

import { readFileSync, existsSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import md5 from 'md5';

const __dirname = dirname(fileURLToPath(import.meta.url));

export function cache(query, value) {
  const filename = join(__dirname, '../../cache', `${md5(query)}.json`);

  if (!value) {
    if (!existsSync(filename)) return undefined;
    return JSON.parse(readFileSync(filename, 'utf8'));
  } else {
    // we save to cache
    writeFileSync(filename, JSON.stringify(value), 'utf8');
  }
}

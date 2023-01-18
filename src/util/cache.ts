import { readFileSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';

import md5 from 'md5';

export function cache(query: string, value?: string) {
  const filename = join(__dirname, `../../cache/${md5(query)}.json`);

  if (!value) {
    if (!existsSync(filename)) return undefined;
    return JSON.parse(readFileSync(filename, 'utf8'));
  } else {
    // we save to cache
    writeFileSync(filename, JSON.stringify(value), 'utf8');
  }
}

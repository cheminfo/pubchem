import { getGHS } from './getGHS.js';

export class CompoundData {
  constructor(data) {
    this.data = data;
  }

  getGHS() {
    return getGHS(this.data);
  }
}

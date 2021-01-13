import { getGHS } from './getGHS';

export class CompoundData {
  constructor(data) {
    this.data = data;
  }

  getGHS() {
    return getGHS(this.data);
  }
}

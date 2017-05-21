import { observable, computed } from 'mobx';
export default class SuccessRateStore {
  @observable successCount;
  @observable failCount;
  constructor(data) {
    Object.assign(this, {
      successCount: 0,
      failCount: 0
    }, data);
  }
  static fromJS(data) {
    const successRateStore = new SuccessRateStore(data);
    return successRateStore;
  }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
export default class SuccessRate extends Component {
  render() {
    const { successCount, failCount } = this.props.successRateStore;
    const tryCount = successCount + failCount;
    const successRate = tryCount === 0 ? 0 : Math.round(successCount * 1000 / tryCount) / 10;
    return (
      <div>
        <h1>Pot Success: <span className="text-info">{successRate}%</span></h1>
        <hr />
        <button className="btn-success" onClick={() => ::this.succeed()}>Succeed</button>
        <button className="btn-danger" onClick={() => ::this.fail()}>Fail</button>
        <button className="btn-info" onClick={() => ::this.reset()}>Reset</button>
      </div>
    );
  }
  succeed() {
    this.props.successRateStore.successCount++;
  }
  fail() {
    this.props.successRateStore.failCount++;
  }
  reset() {
    this.props.successRateStore.successCount = 0;
    this.props.successRateStore.failCount = 0;
  }
}
SuccessRate.propsTypes = {
  successRateStore: PropTypes.object.isRequired
};
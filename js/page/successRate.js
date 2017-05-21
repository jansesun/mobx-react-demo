import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import SuccessRateStore from '../stores/SuccessRateStore';
import SuccessRate from '../components/SuccessRate';
const successRateStore = SuccessRateStore.fromJS({
  successCount: 1,
  failCount: 2
});
render(
  <SuccessRate successRateStore={successRateStore} />,
  document.getElementById('root')
);
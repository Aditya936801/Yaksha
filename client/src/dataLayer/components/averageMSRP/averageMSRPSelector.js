import { get } from 'lodash-es';

export const getSelectedMSRPGraphData = ( state) => {
  const data = get(state, 'averageMSRP.graphData', []);
  return data;
};

export const getSelectedMSRP = (state) => {
  const data = get(state, 'averageMSRP.selectedMSRP', 'new');
  return data;
};

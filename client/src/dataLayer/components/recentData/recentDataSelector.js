import { get } from 'lodash-es';

export const getRecentData = ( state) => {
  const data = get(state, 'recentData.data', []);
  return data;
};

export const getIsRecentDataLoading = ( state) => {
  const data = get(state, 'recentData.isLoading', false);
  return data;
};


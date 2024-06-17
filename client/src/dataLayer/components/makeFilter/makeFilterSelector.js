import { get } from 'lodash-es';

export const getMakeFilterListData = ( state) => {
  const data = get(state, 'makeFilter.data', []);
  return data;
};
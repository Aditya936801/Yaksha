import Api from './requestHandler';

export const fetch_make_filter_list = async () => {
  try {
    const data = await Api.get('api/global/make-filter/list');
    return data;
  } catch (err) {
    console.log('error is', err);
    return {
      error: err?.message || 'Something went wrong',
    };
  }
};

export const fetch_recent_data = async () => {
  try {
    const data = await Api.get('/api/vehicle/recent-data');
    console.log('data s', data);
    return data;
  } catch (err) {
    console.log('error is', err);
    return {
      error: err?.message || 'Something went wrong',
    };
  }
};

export const fetch_inventory_graph_data = async (
  inventoryType = '',
  makeFilters = [],
  durationFilters = []
) => {
  try {
    const data = await Api.post(`/api/vehicle/graph-data/inventory`, {
      make: makeFilters,
      duration: durationFilters,
      condition: inventoryType,
    });
    return data;
  } catch (err) {
    return {
      error: err?.message || 'Something went wrong',
    };
  }
};

export const fetch_MSRP_graph_data = async (
  MSRPType = '',
  makeFilters = [],
  durationFilters = []
) => {
  try {
    const data = await Api.post('/api/vehicle/graph-data/avg-msrp', {
      make: makeFilters,
      duration: durationFilters,
      condition: MSRPType,
    });
    return data;
  } catch (err) {
    return {
      error: err?.message || 'Something went wrong',
    };
  }
};

import { useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import FilterButtons from '../../../../components/FilterButtons';
import {
  setIsMSRPGraphDataLoading,
  setMSRPGraphData,
  setSelectedMSRP,
} from '../../../../dataLayer/components/averageMSRP/averageMSRPAction';
import { getSelectedMSRP } from '../../../../dataLayer/components/averageMSRP/averageMSRPSelector';
import { fetch_MSRP_graph_data } from '../../../../api/inventory';
import {
  getSelectedDurationFilter,
  getSelectedMakeFilter,
} from '../../../../dataLayer/components/filterDataSheet/filterDataSheetSelector';

const AverageMSRPFilterButtons = () => {
  const dispatch = useDispatch();
  const selectedMSRP = useSelector(getSelectedMSRP, shallowEqual);
  const selectedMakeFilter = useSelector(getSelectedMakeFilter, shallowEqual);
  const selectedDurationFilter = useSelector(getSelectedDurationFilter, shallowEqual);

  const getGraphData = useCallback(
    async (inventoryType = '', makeFilters = {}, durationFilters = {}) => {
      try {
        dispatch(setIsMSRPGraphDataLoading(true));
        const selectedMakeFilterList = Object.keys(makeFilters).filter(
          (item) => makeFilters[item] || false
        );
        const selectedDurationFilterList = Object.keys(durationFilters).filter(
          (item) => durationFilters[item] || false
        );
        const graphData = await fetch_MSRP_graph_data(
          inventoryType,
          selectedMakeFilterList,
          selectedDurationFilterList
        );
        if (graphData?.error) {
          console.log(graphData?.error);
        } else {
          dispatch(setMSRPGraphData(graphData));
        }
      } catch (err) {
        const payload = {
          labels: [],
          values: [],
        };
        dispatch(setMSRPGraphData(payload));
        console.log(err);
      } finally {
        dispatch(setIsMSRPGraphDataLoading(false));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getGraphData(selectedMSRP, selectedMakeFilter, selectedDurationFilter);
  }, [getGraphData, selectedDurationFilter, selectedMSRP, selectedMakeFilter]);

  const handleFilter = (value) => {
    dispatch(setSelectedMSRP(value));
  };

  return (
    <div>
      <FilterButtons selectedButtonFilter={selectedMSRP} setSelectedButtonFilter={handleFilter} />
    </div>
  );
};

export default AverageMSRPFilterButtons;

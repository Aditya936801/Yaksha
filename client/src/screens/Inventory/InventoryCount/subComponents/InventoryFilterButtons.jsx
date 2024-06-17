import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import FilterButtons from '../../../../components/FilterButtons';
import { getSelectedInventory } from '../../../../dataLayer/components/inventoryCount/inventoryCountSelector';
import {
  setInventoryGraphData,
  setIsInventoryGraphDataLoading,
  setSelectedInventory,
} from '../../../../dataLayer/components/inventoryCount/inventoryCountAction';
import { useCallback, useEffect } from 'react';
import { fetch_inventory_graph_data } from '../../../../api/inventory';
import {
  getSelectedDurationFilter,
  getSelectedMakeFilter,
} from '../../../../dataLayer/components/filterDataSheet/filterDataSheetSelector';

const InventoryFilterButtons = () => {
  const dispatch = useDispatch();
  const selectedInventory = useSelector(getSelectedInventory, shallowEqual);
  const selectedMakeFilter = useSelector(getSelectedMakeFilter, shallowEqual);
  const selectedDurationFilter = useSelector(getSelectedDurationFilter, shallowEqual);

  const getGraphData = useCallback(
    async (inventoryType = '', makeFilters = {}, durationFilters = {}) => {
      try {
        dispatch(setIsInventoryGraphDataLoading(true));
        const selectedMakeFilterList = Object.keys(makeFilters).filter(
          (item) => makeFilters[item] || false
        );
        const selectedDurationFilterList = Object.keys(durationFilters).filter(
          (item) => durationFilters[item] || false
        );
        const graphData = await fetch_inventory_graph_data(
          inventoryType,
          selectedMakeFilterList,
          selectedDurationFilterList
        );
        if (graphData?.error) {
          console.log(graphData?.error);
        } else {
          dispatch(setInventoryGraphData(graphData));
        }
      } catch (err) {
        const payload = {
          labels: [],
          values: [],
        };
        dispatch(setInventoryGraphData(payload));
        console.log(err);
      } finally {
        dispatch(setIsInventoryGraphDataLoading(false));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getGraphData(selectedInventory, selectedMakeFilter, selectedDurationFilter);
  }, [getGraphData, selectedInventory, selectedMakeFilter, selectedDurationFilter]);

  const handleFilter = (value) => {
    dispatch(setSelectedInventory(value));
  };

  return (
    <div>
      <FilterButtons
        selectedButtonFilter={selectedInventory}
        setSelectedButtonFilter={handleFilter}
      />
    </div>
  );
};

export default InventoryFilterButtons;

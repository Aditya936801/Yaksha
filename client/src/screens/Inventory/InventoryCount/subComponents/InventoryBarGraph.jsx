import { useMemo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import BarGraph from '../../../../components/BarGraph';
import {
  getIsInventoryGraphDataLoading,
  getSelectedInventoryGraphData,
} from '../../../../dataLayer/components/inventoryCount/inventoryCountSelector';
import { isEmpty } from 'lodash-es';

const InventoryBarGraph = () => {
  const graphData = useSelector(getSelectedInventoryGraphData, shallowEqual);
  const isGraphLoading = useSelector(getIsInventoryGraphDataLoading, shallowEqual);
  const isGraphDataEmpty = useMemo(
    () => isEmpty(graphData?.values) && !isGraphLoading,
    [graphData?.values, isGraphLoading]
  );
  const graphConfig = useMemo(() => {
    return {
      labels: graphData?.labels || [],
      datasets: [
        {
          label: 'Dataset 1',
          data: graphData?.values || [],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
  }, [graphData]);

  return (
    <BarGraph data={graphConfig} isLoading={isGraphLoading} isGraphDataEmpty={isGraphDataEmpty} />
  );
};

export default InventoryBarGraph;

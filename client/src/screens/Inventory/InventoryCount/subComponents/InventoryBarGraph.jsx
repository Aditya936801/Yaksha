import { useMemo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import BarGraph from '../../../../components/BarGraph';
import { getSelectedInventoryGraphData } from '../../../../dataLayer/components/inventoryCount/inventoryCountSelector';
import { isEmpty } from 'lodash-es';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const InventoryBarGraph = () => {
  const graphData = useSelector(getSelectedInventoryGraphData, shallowEqual);
  const graphConfig = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: graphData,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
  }, [graphData]);

  return (
    <div>{!isEmpty(graphData) ? <BarGraph data={graphConfig} /> : <div>loadinnggg....</div>}</div>
  );
};

export default InventoryBarGraph;

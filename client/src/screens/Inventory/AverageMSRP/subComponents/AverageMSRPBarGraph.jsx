import { isEmpty } from 'lodash-es';
import { useMemo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import BarGraph from '../../../../components/BarGraph';
import { getSelectedMSRPGraphData } from '../../../../dataLayer/components/averageMSRP/averageMSRPSelector';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const AverageMSRPBarGraph = () => {
  const graphData = useSelector(getSelectedMSRPGraphData, shallowEqual);
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

export default AverageMSRPBarGraph;

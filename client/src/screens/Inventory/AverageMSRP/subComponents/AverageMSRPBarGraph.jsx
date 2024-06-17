import { useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import BarGraph from "../../../../components/BarGraph";
import { getIsMSRPGraphDataLoading, getSelectedMSRPGraphData } from "../../../../dataLayer/components/averageMSRP/averageMSRPSelector";
import { isEmpty } from "lodash-es";

const AverageMSRPBarGraph = () => {
  const graphData = useSelector(getSelectedMSRPGraphData, shallowEqual);
  const isGraphLoading = useSelector(getIsMSRPGraphDataLoading, shallowEqual);
  const isGraphDataEmpty = useMemo(() => isEmpty(graphData?.values) && !isGraphLoading, [graphData?.values, isGraphLoading]);
  const graphConfig = useMemo(() => {
    return {
      labels: graphData?.labels || [],
      datasets: [
        {
          label: "",
          data: graphData?.values || [],
          backgroundColor: "#FF9926",
        },
      ],
    };
  }, [graphData]);

  return (
    <div>
      <BarGraph data={graphConfig} isLoading={isGraphLoading} isGraphDataEmpty={isGraphDataEmpty} />
    </div>
  );
};

export default AverageMSRPBarGraph;

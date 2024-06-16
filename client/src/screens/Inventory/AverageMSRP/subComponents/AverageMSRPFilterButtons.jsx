import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import FilterButtons from '../../../../components/FilterButtons';
import {
  setMSRPGraphData,
  setSelectedMSRP,
} from '../../../../dataLayer/components/averageMSRP/averageMSRPAction';
import { getSelectedMSRP } from '../../../../dataLayer/components/averageMSRP/averageMSRPSelector';

// temp function to generate chart data
function getRandomNumbers() {
  let numbers = [];
  const min = 1; // Minimum value for random number (adjust as needed)
  const max = 100; // Maximum value for random number (adjust as needed)

  for (let i = 0; i < 30; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(randomNumber);
  }

  return numbers;
}

const AverageMSRPFilterButtons = () => {
  const dispatch = useDispatch();
  const selectedMSRP = useSelector(getSelectedMSRP, shallowEqual);

  useEffect(() => {
    const graphData = getRandomNumbers();
    dispatch(setMSRPGraphData(graphData));
  }, [dispatch, selectedMSRP]);

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

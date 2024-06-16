import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import FilterButtons from '../../../../components/FilterButtons';
import { getSelectedInventory } from '../../../../dataLayer/components/inventoryCount/inventoryCountSelector';
import {
  setInventoryGraphData,
  setSelectedInventory,
} from '../../../../dataLayer/components/inventoryCount/inventoryCountAction';
import { useEffect } from 'react';

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

const InventoryFilterButtons = () => {
  const dispatch = useDispatch();
  const selectedInventory = useSelector(getSelectedInventory, shallowEqual);

  useEffect(() => {
    const graphData = getRandomNumbers();
    dispatch(setInventoryGraphData(graphData));
  }, [dispatch, selectedInventory]);

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

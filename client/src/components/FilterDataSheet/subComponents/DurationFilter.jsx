import { cloneDeep } from 'lodash-es';
import { memo } from 'react';
import { DURATION_FILTER_LIST, FILTER_LABEL } from '../constants';
import FilterCategoryList from './FilterCategoryList';

const DurationFilter = ({ localSelectedDurationFilter, setLocalSelectedDurationFilter }) => {
  const handleCheckbox = (value) => {
    const tempSelectedDurationFilter = cloneDeep(localSelectedDurationFilter);
    const isStoredValue = tempSelectedDurationFilter[value] ? true : false;
    if (isStoredValue) {
      tempSelectedDurationFilter[value] = false;
    } else {
      tempSelectedDurationFilter[value] = true;
    }
    setLocalSelectedDurationFilter(tempSelectedDurationFilter);
  };

  return (
    <div>
      <FilterCategoryList
        category={FILTER_LABEL.duration.label}
        categoryList={DURATION_FILTER_LIST}
        handleCheckbox={handleCheckbox}
        selectedFilter={localSelectedDurationFilter}
      />
    </div>
  );
};

export default memo(DurationFilter);

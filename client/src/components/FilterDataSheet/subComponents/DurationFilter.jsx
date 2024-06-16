import { cloneDeep } from 'lodash-es';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setDurationFilter } from '../../../dataLayer/components/filterDataSheet/filterDataSheetAction';
import { getSelectedDurationFilter } from '../../../dataLayer/components/filterDataSheet/filterDataSheetSelector';
import { DURATION_FILTER_LIST, FILTER_LABEL } from '../constants';
import FilterCategoryList from './FilterCategoryList';
import { memo } from 'react';

const DurationFilter = () => {
  const dispatch = useDispatch();

  const selectedDurationFilter = useSelector(getSelectedDurationFilter, shallowEqual);
  const handleCheckbox = (value) => {
    const tempSelectedDurationFilter = cloneDeep(selectedDurationFilter);
    const isStoredValue = tempSelectedDurationFilter[value] ? true : false;
    if (isStoredValue) {
      tempSelectedDurationFilter[value] = false;
    } else {
      tempSelectedDurationFilter[value] = true;
    }
    dispatch(setDurationFilter(tempSelectedDurationFilter));
  };

  return (
    <div>
      <FilterCategoryList
        category={FILTER_LABEL.duration.label}
        categoryList={DURATION_FILTER_LIST}
        handleCheckbox={handleCheckbox}
        selectedFilter={selectedDurationFilter}
      />
    </div>
  );
};

export default memo(DurationFilter);

import { cloneDeep } from 'lodash-es';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setMakeFilter } from '../../../dataLayer/components/filterDataSheet/filterDataSheetAction';
import { getSelectedMakeFilter } from '../../../dataLayer/components/filterDataSheet/filterDataSheetSelector';
import { FILTER_LABEL, MAKE_FILTER_LIST } from '../constants';
import FilterCategoryList from './FilterCategoryList';
import { memo } from 'react';

const MakeFilter = () => {
  const dispatch = useDispatch();
  const selectedMakeFilter = useSelector(getSelectedMakeFilter, shallowEqual);

  const handleCheckbox = (value) => {
    const tempSelectedMakeFilter = cloneDeep(selectedMakeFilter);
    const isStoredValue = tempSelectedMakeFilter[value] ? true : false;
    if (isStoredValue) {
      tempSelectedMakeFilter[value] = false;
    } else {
      tempSelectedMakeFilter[value] = true;
    }
    dispatch(setMakeFilter(tempSelectedMakeFilter));
  };

  return (
    <div>
      <FilterCategoryList
        category={FILTER_LABEL.make.label}
        categoryList={MAKE_FILTER_LIST}
        handleCheckbox={handleCheckbox}
        selectedFilter={selectedMakeFilter}
      />
    </div>
  );
};

export default memo(MakeFilter);

import { cloneDeep } from 'lodash-es';
import { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getMakeFilterListData } from '../../../dataLayer/components/makeFilter/makeFilterSelector';
import { FILTER_LABEL } from '../constants';
import FilterCategoryList from './FilterCategoryList';

const MakeFilter = ({ localSelectedMakeFilter, setLocalSelectedMakeFilter }) => {
  const makeFilterOptions = useSelector(getMakeFilterListData, shallowEqual);

  const handleCheckbox = (value) => {
    const tempSelectedMakeFilter = cloneDeep(localSelectedMakeFilter);
    const isStoredValue = tempSelectedMakeFilter[value] ? true : false;
    if (isStoredValue) {
      tempSelectedMakeFilter[value] = false;
    } else {
      tempSelectedMakeFilter[value] = true;
    }
    setLocalSelectedMakeFilter(tempSelectedMakeFilter);
  };

  return (
    <div>
      <FilterCategoryList
        category={FILTER_LABEL.make.label}
        categoryList={makeFilterOptions}
        handleCheckbox={handleCheckbox}
        selectedFilter={localSelectedMakeFilter}
      />
    </div>
  );
};

export default memo(MakeFilter);

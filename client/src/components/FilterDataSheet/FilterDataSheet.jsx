import Separator from '../Separator';
import FilterHeader from './subComponents/FilterHeader';
import MakeFilter from './subComponents/MakeFilter';
import DurationFilter from './subComponents/DurationFilter';
import { shallowEqual, useSelector } from 'react-redux';
import {
  getSelectedDurationFilter,
  getSelectedMakeFilter,
} from '../../dataLayer/components/filterDataSheet/filterDataSheetSelector';
import styles from './filterDataSheet.module.css';
import Button from '../Button';

const FilterDataSheet = () => {
  const selectedMakeFilter = useSelector(getSelectedMakeFilter, shallowEqual);
  const selectedDurationFilter = useSelector(getSelectedDurationFilter, shallowEqual);

  const onFilterClick = () => {
    const selectedMakeFilterList = Object.keys(selectedMakeFilter).filter(
      (item) => selectedMakeFilter[item] || false
    );
    const selectedDurationFilterList = Object.keys(selectedDurationFilter).filter(
      (item) => selectedDurationFilter[item] || false
    );
    const filterPayload = {
      make: selectedMakeFilterList,
      duration: selectedDurationFilterList,
    };
    console.log(filterPayload);
  };

  return (
    <div className={styles.container}>
      <FilterHeader />
      <Separator top={25} bottom={25} />
      <MakeFilter />
      <Separator top={20} bottom={25} />
      <DurationFilter />
      <Separator top={20} bottom={25} />
      <div className={styles.buttonWrapper}>
        <Button onClick={onFilterClick} title={'Apply Filter'} />
        <Button onClick={onFilterClick} title={'Remove All Filters'} inverted />
      </div>
    </div>
  );
};

export default FilterDataSheet;

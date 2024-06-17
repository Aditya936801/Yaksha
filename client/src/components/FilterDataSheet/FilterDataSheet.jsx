import Separator from '../Separator';
import FilterHeader from './subComponents/FilterHeader';
import MakeFilter from './subComponents/MakeFilter';
import DurationFilter from './subComponents/DurationFilter';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  getSelectedDurationFilter,
  getSelectedMakeFilter,
} from '../../dataLayer/components/filterDataSheet/filterDataSheetSelector';
import styles from './filterDataSheet.module.css';
import Button from '../Button';
import { noop } from 'lodash-es';
import {
  setDurationFilter,
  setMakeFilter,
} from '../../dataLayer/components/filterDataSheet/filterDataSheetAction';
import { useState } from 'react';
import { getSelectedInventory } from '../../dataLayer/components/inventoryCount/inventoryCountSelector';
import { getSelectedMSRP } from '../../dataLayer/components/averageMSRP/averageMSRPSelector';
import close from '../../assets/close.svg';

const FilterDataSheet = ({ onBackClick = noop }) => {
  const selectedMakeFilter = useSelector(getSelectedMakeFilter, shallowEqual);
  const selectedDurationFilter = useSelector(getSelectedDurationFilter, shallowEqual);
  const selectedInventory = useSelector(getSelectedInventory, shallowEqual);
  const selectedMSRP = useSelector(getSelectedMSRP, shallowEqual);
  const [localSelectedMakeFilter, setLocalSelectedMakeFilter] = useState(selectedMakeFilter);
  const [localSelectedDurationFilter, setLocalSelectedDurationFilter] =
    useState(selectedDurationFilter);
  const dispatch = useDispatch();

  const onFilterClick = () => {
    dispatch(setMakeFilter(localSelectedMakeFilter));
    dispatch(setDurationFilter(localSelectedDurationFilter));
    onBackClick();
  };

  const resetFilter = () => {
    onBackClick();
    dispatch(setMakeFilter({}));
    dispatch(setDurationFilter({}));
  };

  return (
    <div className={styles.container}>
      <FilterHeader onBackClick={onBackClick} />
      <Separator top={25} bottom={25} />
      <div className={styles.scrollArea}>
        <MakeFilter
          localSelectedMakeFilter={localSelectedMakeFilter}
          setLocalSelectedMakeFilter={setLocalSelectedMakeFilter}
        />
        <Separator top={20} bottom={25} />
        <DurationFilter
          localSelectedDurationFilter={localSelectedDurationFilter}
          setLocalSelectedDurationFilter={setLocalSelectedDurationFilter}
        />
      </div>

      <div className={styles.bottomSection}>
        <Separator bottom={25} />
        <div className={styles.buttonWrapper}>
          <Button onClick={onFilterClick} title={'Apply Filter'} />

          <Button
            leftSide={<img src={close} alt='close' />}
            onClick={resetFilter}
            title={'Remove All Filters'}
            inverted
          />
        </div>
      </div>
    </div>
  );
};

export default FilterDataSheet;

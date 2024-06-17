import styles from './subComponents.module.css';
import filter from '../../../../assets/filter.svg';
import { TYPOGRAPHY_VARIANTS } from '../../../../components/Typography/constants';
import Typography from '../../../../components/Typography';
import Drawer from '../../../../components/Drawer';
import FilterDataSheet from '../../../../components/FilterDataSheet/FilterDataSheet';
import { useState } from 'react';

const FilterDataButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const openDrawer = () => {
    setIsOpen(true);
  };

  const onBackClick = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setIsOpen(false);
  };

  return (
    <div>
      <div className={styles.filterWrapper} onClick={openDrawer}>
        <img src={filter} alt='filter' />
        <Typography style={innerStyles.filterTitle} variant={TYPOGRAPHY_VARIANTS.subtitle2}>
          Filter Data By
        </Typography>
      </div>
      <Drawer style={innerStyles.drawer} open={isOpen} onClose={toggleDrawer} direction='right'>
        {isOpen && <FilterDataSheet onBackClick={onBackClick} />}
      </Drawer>
    </div>
  );
};

const innerStyles = {
  filterTitle: {
    lineHeight: '36px',
  },
  drawer: {
    minWidth: 500,
    width: 600
  },
};

export default FilterDataButton;

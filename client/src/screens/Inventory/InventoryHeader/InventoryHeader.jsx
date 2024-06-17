import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetch_make_filter_list } from '../../../api/inventory';
import Separator from '../../../components/Separator';
import Typography from '../../../components/Typography';
import { TYPOGRAPHY_VARIANTS } from '../../../components/Typography/constants';
import { setMakeFilterOption } from '../../../dataLayer/components/makeFilter/makeFilterAction';
import styles from './inventoryHeader.module.css';
import FilterDataButton from './subComponents/FilterDataButton';
import DealerMenu from './subComponents/DealerMenu';

const InventoryHeader = () => {
  const dispatch = useDispatch();
  const getMakeFilterOptions = useCallback(async () => {
    const filterList = await fetch_make_filter_list();
    if (!filterList?.error) {
      dispatch(setMakeFilterOption(filterList));
    }
  }, [dispatch]);

  useEffect(() => {
    getMakeFilterOptions();
  }, [getMakeFilterOptions]);

  return (
    <div>
      <div className={styles.headerWrapper}>
        <Typography variant={TYPOGRAPHY_VARIANTS.heading1}>Inventory</Typography>
        <div className={styles.rightSide}>
          <DealerMenu />
          <FilterDataButton />
        </div>
      </div>
      <Separator top={17} />
    </div>
  );
};

export default InventoryHeader;

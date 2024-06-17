import AverageMSRP from './AverageMSRP';
import InventoryCount from './InventoryCount';
import InventoryHeader from './InventoryHeader';
import RecentData from './RecentData';

import styles from './style.module.css';

const Inventory = () => {
  return (
    <div className={styles.container}>
      <InventoryHeader />
      <RecentData />
      <InventoryCount />
      <AverageMSRP />
    </div>
  );
};

export default Inventory;

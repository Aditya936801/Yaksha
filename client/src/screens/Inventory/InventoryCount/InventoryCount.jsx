import SectionTitle from '../../../components/SectionTitle';
import styles from './inventoryCount.module.css';
import InventoryBarGraph from './subComponents/InventoryBarGraph';
import InventoryFilterButtons from './subComponents/InventoryFilterButtons';

const InventoryCount = () => {
  
  return (
    <div>
      <div className={styles.titleWrapper}>
        <SectionTitle title='Inventory Count' />
        <InventoryFilterButtons />
      </div>
      <InventoryBarGraph />
    </div>
  );
};

export default InventoryCount;

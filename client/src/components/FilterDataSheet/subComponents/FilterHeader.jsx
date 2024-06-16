import Typography from '../../Typography';
import { TYPOGRAPHY_VARIANTS } from '../../Typography/constants';
import backButton from '../../../assets/backButton.svg';
import styles from './subComponents.module.css';

const FilterHeader = () => {
  return (
    <div className={styles.filterHeader}>
      <img src={backButton} />
      <Typography variant={TYPOGRAPHY_VARIANTS.heading1}>Filter Data By</Typography>
    </div>
  );
};

export default FilterHeader;

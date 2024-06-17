import Typography from '../../Typography';
import { TYPOGRAPHY_VARIANTS } from '../../Typography/constants';
import backButton from '../../../assets/backButton.svg';
import styles from './subComponents.module.css';
import { noop } from 'lodash-es';

const FilterHeader = ({ onBackClick = noop }) => {
  return (
    <div className={styles.filterHeader}>
      <img src={backButton} alt='back-button' onClick={onBackClick} />
      <Typography variant={TYPOGRAPHY_VARIANTS.heading1}>Filter Data By</Typography>
    </div>
  );
};

export default FilterHeader;

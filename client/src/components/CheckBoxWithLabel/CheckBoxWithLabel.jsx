import { noop } from 'lodash-es';
import styles from './checkboxWithLabel.module.css';
import Typography from '../Typography';
import { TYPOGRAPHY_VARIANTS } from '../Typography/constants';

const CheckboxWithLabel = ({ isChecked = false, label = '', handleCheckboxChange = noop }) => {
  return (
    <div className={styles.container}>
      <input type='checkbox' id={label} checked={isChecked} onChange={handleCheckboxChange} />
      <Typography variant={TYPOGRAPHY_VARIANTS.body2}>
        <label htmlFor={label}>{label}</label>
      </Typography>
    </div>
  );
};

export default CheckboxWithLabel;

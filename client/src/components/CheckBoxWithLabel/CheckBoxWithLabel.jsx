import { noop } from 'lodash-es';
import styles from './checkboxWithLabel.module.css';

const CheckboxWithLabel = ({ isChecked = false, label = '', handleCheckboxChange = noop }) => {
  return (
    <div className={styles.container}>
      <input type='checkbox' id={label} checked={isChecked} onChange={handleCheckboxChange} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CheckboxWithLabel;

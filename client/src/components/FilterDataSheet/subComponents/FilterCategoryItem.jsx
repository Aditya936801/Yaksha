import { noop } from 'lodash-es';
import CheckboxWithLabel from '../../CheckBoxWithLabel/CheckBoxWithLabel';
import styles from './subComponents.module.css';

const FilterCategoryItem = ({ label, handleCheckbox = noop, value = '', isChecked }) => {
  const handleCheckboxChange = () => {
    handleCheckbox(value);
  };

  return (
    <div className={styles.filterCategoryItem}>
      <CheckboxWithLabel
        isChecked={isChecked}
        label={label}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default FilterCategoryItem;

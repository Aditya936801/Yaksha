import Button from '../Button';
import { FILTER_BUTTONS } from './constants';
import styles from './filterButtons.module.css';

const FilterButtons = ({ selectedButtonFilter, setSelectedButtonFilter }) => {
  const handleFilterClick = (value) => {
    setSelectedButtonFilter(value);
  };
  return (
    <div className={styles.btnWrapper}>
      {FILTER_BUTTONS.map((buttonItem) => {
        const { label, value } = buttonItem;
        const isSelected = value === selectedButtonFilter;
        const onClick = () => {
          handleFilterClick(value);
        };
        return (
          <Button
            invertedColor='#000000'
            title={label}
            key={value}
            inverted={!isSelected}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default FilterButtons;

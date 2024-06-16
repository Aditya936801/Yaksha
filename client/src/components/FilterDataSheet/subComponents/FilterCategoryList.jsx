import { noop } from 'lodash-es';
import Typography from '../../Typography';
import FilterCategoryItem from './FilterCategoryItem';
import styles from './subComponents.module.css';

const FilterCategoryList = ({
  category,
  categoryList = [],
  handleCheckbox = noop,
  selectedFilter = {},
}) => {
  return (
    <div className={styles.filterCategoryContainer}>
      <div className={styles.filterCategoryList} key={category}>
        <Typography>{category}</Typography>
        <div className={styles.filterItemContainer}>
          {categoryList?.map((categoryItem) => {
            const { label = '', value = '' } = categoryItem;
            const isChecked = selectedFilter[value] ? true : false;

            return (
              <FilterCategoryItem
                key={value}
                label={label}
                value={value}
                isChecked={isChecked}
                handleCheckbox={handleCheckbox}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterCategoryList;

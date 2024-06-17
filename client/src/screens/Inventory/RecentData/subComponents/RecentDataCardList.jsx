import { shallowEqual, useSelector } from 'react-redux';
import { getRecentData } from '../../../../dataLayer/components/recentData/recentDataSelector';
import RecentDataCard from './RecentDataCard';
import styles from './subComponents.module.css';

const RecentDataCardList = () => {
  const recentDataList = useSelector(getRecentData, shallowEqual);
  return (
    <div className={styles.recentCardListContainer}>
      {recentDataList?.map((recentDataCard) => {
        const { category, displayValue } = recentDataCard;
        return (
          <RecentDataCard
            key={category}
            category={category}
            displayValue={displayValue}
          />
        );
      })}
    </div>
  );
};

export default RecentDataCardList;

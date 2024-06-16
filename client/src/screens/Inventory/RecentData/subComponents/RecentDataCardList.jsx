import RecentDataCard from './RecentDataCard';
import RECENT_DATA from '../MOCK_DATA.json';
import styles from './subComponents.module.css';

const RecentDataCardList = () => {
  const recentDataList = RECENT_DATA;

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

import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetch_recent_data } from '../../../api/inventory';
import SectionTitle from '../../../components/SectionTitle';
import { setRecentData } from '../../../dataLayer/components/recentData/recentDataAction';
import RecentDataCardList from './subComponents/RecentDataCardList';

const RecentData = () => {
  const dispatch = useDispatch();
  const fetchRecentData = useCallback(async () => {
    const data = await fetch_recent_data();
    if (data.error) {
      console.log(data.error);
    } else {
      dispatch(setRecentData(data));
    }
  }, [dispatch]);
  useEffect(() => {
    fetchRecentData();
  }, [fetchRecentData]);
  return (
    <div>
      <SectionTitle title='Recent Gathered Data 04/01/24' />
      <RecentDataCardList />
    </div>
  );
};

export default RecentData;

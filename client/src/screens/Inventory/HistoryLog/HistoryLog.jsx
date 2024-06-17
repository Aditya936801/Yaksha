import SectionTitle from "../../../components/SectionTitle";
import styles from "./historyLog.module.css";
import Table from "./subComponents/Table";
import { useEffect, useState } from "react";
import { fetch_history_log_data } from "../../../api/inventory";
import { useSelector } from "react-redux";
import { getSelectedDurationFilter, getSelectedMakeFilter } from "../../../dataLayer/components/filterDataSheet/filterDataSheetSelector";
import { shallowEqual } from "react-redux";

const HistoryLog = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [data, setData] = useState({});
  const [isAsc, setIsAsc] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const selectedMakeFilter = useSelector(getSelectedMakeFilter, shallowEqual);
  const selectedDurationFilter = useSelector(getSelectedDurationFilter, shallowEqual);
  const selectedMakeFilterList = Object.keys(selectedMakeFilter).filter((item) => selectedMakeFilter[item] || false);
  const selectedDurationFilterList = Object.keys(selectedDurationFilter).filter((item) => selectedDurationFilter[item] || false);

  const handlePerRowsChange = (newPerPage) => {
    setPerPage(newPerPage);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleSort = (column, sortDirection) => {
    if (sortDirection === "asc") {
      setIsAsc(true);
    } else {
      setIsAsc(false);
    }
  };

  const getHistoryLog = async () => {
    try {
      setIsLoading(true);
      const res = await fetch_history_log_data(perPage, page, isAsc, selectedMakeFilterList, selectedDurationFilterList);
      if (res?.error) {
        console.log(res?.error);
      } else {
        setData(res);
      }
    } catch (err) {
      console.log("error", err?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getHistoryLog();
  }, [perPage, page, isAsc, selectedMakeFilter, selectedDurationFilter]);

  return (
    <div>
      <div className={styles.titleWrapper}>
        <SectionTitle title="History Log" />
      </div>
      <Table
        data={data}
        loading={isLoading}
        handlePageChange={handlePageChange}
        handleSort={handleSort}
        handlePerRowsChange={handlePerRowsChange}
      />
    </div>
  );
};

export default HistoryLog;

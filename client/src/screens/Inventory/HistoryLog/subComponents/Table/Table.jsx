import DataTable from "react-data-table-component";
import styles from "./table.module.css";
import CustomSortIcon from "./CustomSortIcon";

const columns = [
  {
    name: "DATE",
    selector: (row) => row._id,
    sortable: true,
  },
  {
    name: "NEW INVENTORY",
    selector: (row) => row.newUnit,
  },
  {
    name: "NEW TOTAL MSRP",
    selector: (row) => row.newMsrp,
  },
  {
    name: "NEW AVERAGE MSRP",
    selector: (row) => row.newAvgMsrp,
  },
  {
    name: "USED INVENTORY",
    selector: (row) => row.usedUnit,
  },
  {
    name: "USED TOTAL MSRP",
    selector: (row) => row.usedMsrp,
  },
  {
    name: "USED AVERAGE MSRP",
    selector: (row) => row.usedAvgMsrp,
  },
  {
    name: "CPO INVENTORY",
    selector: (row) => row.cpoUnit,
  },
  {
    name: "CPO TOTAL MSRP",
    selector: (row) => row.cpoMsrp,
  },
  {
    name: "CPO AVERAGE MSRP",
    selector: (row) => row.cpoAvgMsrp,
  },
];

const Table = (props) => {
  const { data, handlePageChange, handlePerRowsChange, handleSort, loading } = props;
  const tableData = data?.tableData || [];
  const totalRows = data?.meta?.pagination?.totalEntry;
  return (
    <div className={styles.tableWrapper}>
      <DataTable
        columns={columns}
        data={tableData}
        sortIcon={<CustomSortIcon />}
        pagination
        paginationServer
        progressPending={loading}
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        onSort={handleSort}
      />
    </div>
  );
};

export default Table;

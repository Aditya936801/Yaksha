import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

import DotLoader from "../DotLoader";
import Typography from "../Typography";
import { TYPOGRAPHY_VARIANTS } from "../Typography/constants";
import styles from "./barGraph.module.css";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  width: "100%",
  scales: {
    y: {
      border: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const BarGraph = ({ data = {}, isLoading = false, isGraphDataEmpty = false }) => {
  if (isGraphDataEmpty) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyData}>
          <Typography variant={TYPOGRAPHY_VARIANTS.heading1}>No Data to show</Typography>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles.backdrop}>
          <DotLoader />
        </div>
      )}
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarGraph;

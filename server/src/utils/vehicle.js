import dayjs from "dayjs";

export const getRecentDataArray = (arr) => {
  const newArr = [];

  arr?.forEach((el) => {
    const obj1 = {
      category: `# ${el?._id} Units`,
      value: parseInt(el?.unit),
      displayValue: parseInt(el?.unit),
    };
    const obj2 = {
      category: `${el?._id} MSRP`,
      value: parseInt(el?.msrp),
      displayValue: `$${parseInt(el?.msrp).toLocaleString("en-US")}`,
    };
    const obj3 = {
      category: `${el?._id} Avg. MSRP`,
      value: parseInt(el?.avgMsrp),
      displayValue: `$${parseInt(el?.avgMsrp).toLocaleString("en-US")}`,
    };
    newArr.push(obj1);
    newArr.push(obj2);
    newArr.push(obj3);
  });

  return newArr;
};

export const getGraphData = (arr) => {
  const labels = [];
  const values = [];

  arr?.forEach?.((el) => {
    labels.push(el?.label);
    values.push(parseInt(el?.value));
  });

  return {
    labels,
    values,
  };
};

export const getFilterPipeLine = (arr) => {
  const today = dayjs();
  let startDate;
  let endDate;
  const matchCondition = {};

  matchCondition.$or = [];

  arr?.forEach((el) => {
    if (el === "lastMonth") {
      {
        const startThis = today.startOf("month");
        const startLast = startThis.subtract(1, "month");
        const endLast = startLast.endOf("month");
        startDate = startLast;
        endDate = endLast;
        const obj = { $gte: new Date(startDate), $lte: new Date(endDate) };
        matchCondition.$or?.push({ timestamp: obj });
      }
    } else if (el === "thisMonth") {
      const startThis = today.startOf("month");
      startDate = startThis;
      endDate = today;
      const obj = { $gte: new Date(startDate), $lte: new Date(endDate) };
      matchCondition.$or?.push({ timestamp: obj });
    } else if (el === "last3Months") {
      const startThis = today.subtract(3, "month");
      startDate = startThis;
      endDate = today;
      const obj = { $gte: new Date(startDate), $lte: new Date(endDate) };
      matchCondition.$or?.push({ timestamp: obj });
    } else if (el === "last6Months") {
      const startThis = today.subtract(6, "month");
      startDate = startThis;
      endDate = today;
      const obj = { $gte: new Date(startDate), $lte: new Date(endDate) };
      matchCondition.$or?.push({ timestamp: obj });
    } else if (el === "thisYear") {
      const startThis = today.startOf("year");
      startDate = startThis;
      endDate = today;
      const obj = { $gte: new Date(startDate), $lte: new Date(endDate) };
      matchCondition.$or?.push({ timestamp: obj });
    } else if (el === "lastYear") {
      const startThis = today.startOf("year");
      const startLast = startThis.subtract(1, "year");
      const endLast = startLast.endOf("year");
      startDate = startLast;
      endDate = endLast;
      const obj = { $gte: new Date(startDate), $lte: new Date(endDate) };
      matchCondition.$or?.push({ timestamp: obj });
    }
  });
  return matchCondition;
};

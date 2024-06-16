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

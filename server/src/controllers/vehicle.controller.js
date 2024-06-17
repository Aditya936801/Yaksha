import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { vehicles } from "../models/vehicle.model.js";
import {
  getRecentDataArray,
  getGraphData,
  getFilterPipeLine,
} from "../utils/vehicle.js";

export const getRecentData = async (req, res) => {
  try {
    const today = new Date();
    const pipeline = [
      {
        $match: {
          timestamp: { $lte: today },
        },
      },
      {
        $group: {
          _id: "$condition",
          unit: { $count: {} },
          msrp: { $sum: "$price" },
          avgMsrp: { $avg: "$price" },
        },
      },
      {
        $project: {
          unit: "$unit",
          msrp: "$msrp",
          avgMsrp: "$avgMsrp",
          order: {
            $cond: {
              if: { $eq: ["$_id", "new"] },
              then: 1,
              else: {
                $cond: {
                  if: { $eq: ["$_id", "used"] },
                  then: 2,
                  else: 3,
                },
              },
            },
          },
        },
      },
      {
        $sort: { order: 1 },
      },
    ];
    const arr = await vehicles.aggregate(pipeline);
    const data = getRecentDataArray(arr);

    return res.status(200).json(new ApiResponse(200, data));
  } catch (err) {
    throw new ApiError(500, err?.message);
  }
};

export const getAvgMsrpGraphData = async (req, res) => {
  try {
    const { make, duration, condition } = req.body;

    const today = new Date();
    const pipeline = [
      {
        $match: {
          timestamp: { $lte: today },
          condition: condition,
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$timestamp",
            },
          },
          avgMsrp: { $avg: "$price" },
        },
      },
      {
        $project: {
          label: "$_id",
          value: "$avgMsrp",
          _id: 0,
        },
      },
      {
        $sort: {
          label: 1,
        },
      },
    ];
    if (make?.length > 0) {
      pipeline.unshift({
        $match: {
          brand: { $in: make },
        },
      });
    }

    if (duration?.length > 0) {
      const obj = getFilterPipeLine(duration);
      console.log(obj.$or);
      pipeline.unshift({ $match: obj });
    }
    const arr = await vehicles.aggregate(pipeline);
    const data = getGraphData(arr);

    return res.status(200).json(new ApiResponse(200, data));
  } catch (err) {
    throw new ApiError(500, err?.message);
  }
};

export const getInventoryGraphData = async (req, res) => {
  try {
    const { make, duration, condition } = req.body;

    const today = new Date();

    const pipeline = [
      {
        $match: {
          timestamp: { $lte: today },
          condition: condition,
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$timestamp",
            },
          },
          unit: { $count: {} },
        },
      },
      {
        $project: {
          label: "$_id",
          value: "$unit",
          _id: 0,
        },
      },
      {
        $sort: {
          label: 1,
        },
      },
    ];
    if (make?.length > 0) {
      pipeline.unshift({
        $match: {
          brand: { $in: make },
        },
      });
    }

    if (duration?.length > 0) {
      const obj = getFilterPipeLine(duration);
      console.log(obj.$or);
      pipeline.unshift({ $match: obj });
    }
    const arr = await vehicles.aggregate(pipeline);
    const data = getGraphData(arr);
    return res.status(200).json(new ApiResponse(200, data));
  } catch (err) {
    throw new ApiError(500, err?.message);
  }
};

export const getTableData = async (req, res) => {
  try {
    const { isAsc, page, perPage, make, duration } = req.body;
    const skip = perPage * (page - 1);
    const today = new Date();
    const pipeline = [
      {
        $match: {
          timestamp: { $lte: today },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$timestamp",
            },
          },
          newUnit: {
            $sum: {
              $cond: {
                if: { $eq: ["$condition", "new"] },
                then: 1,
                else: 0,
              },
            },
          },
          newMsrp: {
            $sum: {
              $cond: {
                if: { $eq: ["$condition", "new"] },
                then: "$price",
                else: 0,
              },
            },
          },
          newAvgMsrp: {
            $avg: {
              $cond: {
                if: { $eq: ["$condition", "new"] },
                then: "$price",
                else: 0,
              },
            },
          },
          usedUnit: {
            $sum: {
              $cond: {
                if: { $eq: ["$condition", "used"] },
                then: 1,
                else: 0,
              },
            },
          },
          usedMsrp: {
            $sum: {
              $cond: {
                if: { $eq: ["$condition", "used"] },
                then: "$price",
                else: 0,
              },
            },
          },
          usedAvgMsrp: {
            $avg: {
              $cond: {
                if: { $eq: ["$condition", "used"] },
                then: "$price",
                else: 0,
              },
            },
          },
          cpoUnit: {
            $sum: {
              $cond: {
                if: { $eq: ["$condition", "cpo"] },
                then: 1,
                else: 0,
              },
            },
          },
          cpoMsrp: {
            $sum: {
              $cond: {
                if: { $eq: ["$condition", "cpo"] },
                then: "$price",
                else: 0,
              },
            },
          },
          cpoAvgMsrp: {
            $avg: {
              $cond: {
                if: { $eq: ["$condition", "cpo"] },
                then: "$price",
                else: 0,
              },
            },
          },
        },
      },

      { $sort: { _id: isAsc ? 1 : -1 } },
      {
        $facet: {
          paginatedResults: [{ $skip: skip }, { $limit: perPage }],
          totalCount: [
            {
              $count: "count",
            },
          ],
        },
      },
    ];
    if (make?.length > 0) {
      pipeline.unshift({
        $match: {
          brand: { $in: make },
        },
      });
    }

    if (duration?.length > 0) {
      const obj = getFilterPipeLine(duration);
      console.log(obj.$or);
      pipeline.unshift({ $match: obj });
    }

    const tableData = await vehicles.aggregate(pipeline);
    const totalEntry = tableData[0]?.totalCount[0]?.count;
    const totalPage = Math.ceil(totalEntry / perPage);
    const meta = {
      pagination: {
        totalPage,
        totalEntry,
      },
    };
    const data = {
      tableData: tableData[0]?.paginatedResults,
      meta,
    };

    return res.status(200).json(new ApiResponse(200, data));
  } catch (err) {
    throw new ApiError(500, err?.message);
  }
};

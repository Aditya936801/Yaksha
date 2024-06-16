import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { vehicles } from "../models/vehicle.model.js";

export const getMakeFilterList = async (req, res) => {
  try {
    const pipeline = [
      { $group: { _id: "$brand" } },
      {
        $project: {
          label: "$_id",
          value: "$_id",
          _id: 0,
        },
      },
    ];
    const filterList = await vehicles.aggregate(pipeline);
    return res.status(200).json(new ApiResponse(200, filterList));
  } catch (err) {
    throw new ApiError(500, err?.message);
  }
};

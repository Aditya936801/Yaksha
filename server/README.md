Overview
This documentation outlines the setup, usage, and API structure of an Express.js project integrated with MongoDB.

Requirements
Node.js (recommended version)

Installation

1. Install dependencies:
npm install


2. Start the server:

npm run dev
This will start the server at http://localhost:8000 (or another port specified in your .env file).

API Endpoints

1. URL: /api/global/make-filter/list
Method: GET
Response: {
    "statusCode": 200,
    "data": [
        {
            "label": "Ram",
            "value": "Ram"
        },
        {
            "label": "Jeep",
            "value": "Jeep"
        },
  
    ],
    "message": "Success",
    "success": true
}

2. URL: /api/vehicle/recent-data
Method: GET
Response: {   "statusCode": 200,
    "data": [
        {
            "category": "# new Units",
            "value": 42,
            "displayValue": 42
        },
        {
            "category": "new MSRP",
            "value": 2750122,
            "displayValue": "$2,750,122"
        },
      
    ],
    "message": "Success",
    "success": true
}

3. URL: /api/vehicle/graph-data/inventory
Method: POST
Request Body: {
  condition: "new",
  duration: [],
  make: [],
}
Response:{
  statusCode: 200,
  data: {
    labels: ["2024-01-13", "2024-01-16"],
    values: [1, 1],
  },
  message: "Success",
  success: true,
}

4. URL: /api/vehicle/graph-data/avg-msrp
Method: POST
Request Body: {
  condition: "new",
  duration: [],
  make: [],
}
Response:{
  statusCode: 200,
  data: {
    labels: ["2024-01-13", "2024-01-16"],
    values: [ 85088,48784],
  },
  message: "Success",
  success: true,
}

5. URL: /api/vehicle/table-data
Method: POST
Request Body:{
  duration: [],
  isAsc: true,
  make: [],
  page: 1,
  perPage: 10,
}

Response:{
  statusCode: 200,
  data: {
    tableData: [
      {
        _id: "2024-01-01",
        newUnit: 0,
        newMsrp: 0,
        newAvgMsrp: 0,
        usedUnit: 0,
        usedMsrp: 0,
        usedAvgMsrp: 0,
        cpoUnit: 1,
        cpoMsrp: 22719,
        cpoAvgMsrp: 22719,
      },
    ],
    meta: {
      pagination: {
        totalPage: 8,
        totalEntry: 76,
      },
    },
  },
  message: "Success",
  success: true,
}

Notes
Ensure MongoDB is running and accessible with the provided connection string.
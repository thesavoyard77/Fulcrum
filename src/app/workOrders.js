// Import csv to json and the reverse to simulate a database
const CSVToJSON = require('csvtojson');
const JSONToCSV = require("json2csv").parse;
const FileSystem = require('fs');

// Define action types as constants
const GET_WORK_ORDERS = 'workOrders/GET_WORK_ORDERS'

// Create actions to initiate a change of state
const getWorkOrders = (workOrders) => {
 return {
     type: GET_WORK_ORDERS,
     payload: workOrders
 }
}

//Create thunks to call routes and initiate actions
export const getWorkOrdersThunk = () => {
  const data =  CSVToJSON().fromFile("./public/workOrders.csv").then(source => {
        console.log(source);
    })
    console.log(data)
    const payload = await data.json()
    if (payload) {
        dispatch(getWorkOrders(payload))
    }
}


// define an initial state
const initialState = {};

//define a reducer

export default function workOrdersReducer(state = initialState, action) {
    let newState = {...state}
    switch (action.type) {
        case GET_WORK_ORDERS:
            newState = {...action.payload}
        default:
            return state
    }
}
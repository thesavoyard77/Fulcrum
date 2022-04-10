// // Import csv to json and the reverse to simulate a database
// const workOrders = require('../componants/Home/workOrders.csv')

// // Define action types as constants
// const GET_WORK_ORDERS = 'workOrders/GET_WORK_ORDERS'

// // Create actions to initiate a change of state
// const getWorkOrders = (workOrders) => {
//  return {
//      type: GET_WORK_ORDERS,
//      payload: workOrders
//  }
// }

// //Create thunks to call routes and initiate actions
// export const getWorkOrdersThunk = () => async (dispatch) => {
//   const data =  workOrders;
//     console.log(data)
  
//     if (data) {
//         dispatch(getWorkOrders(data))
//     }
// }


// // define an initial state
// const initialState = {};

// //define a reducer

// export default function workOrdersReducer(state = initialState, action) {
//     let newState = {...state}
//     switch (action.type) {
//         case GET_WORK_ORDERS:
//             newState = {...action.payload}
//         default:
//             return state
//     }
// }
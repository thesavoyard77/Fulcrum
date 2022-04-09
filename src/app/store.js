import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import workOrders from './workOrders'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    workOrders: workOrders,
  },
});

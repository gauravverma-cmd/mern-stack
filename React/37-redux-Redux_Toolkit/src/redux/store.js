import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,

  },
})

// Steps perform in redux 
// create store 
// wrap app in the Provider
// create Slice 
// register reducer in store 
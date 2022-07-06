import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../components/CounterSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})

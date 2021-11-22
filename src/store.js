import { configureStore } from "@reduxjs/toolkit";
import jugglingReducer from "../src/reducers/jugglingSlice";

export default configureStore({
  reducer: {
    juggling: jugglingReducer,
  },
});

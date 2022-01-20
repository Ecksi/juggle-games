import { configureStore } from "@reduxjs/toolkit";
import jugglingTricksReducer from "./reducers/jugglingTricksSlice";

export default configureStore({
  reducer: {
    jugglingTricks: jugglingTricksReducer,
  },
});

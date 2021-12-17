import { configureStore } from "@reduxjs/toolkit";
import jugglingTrickReducer from "./reducers/jugglingTrickSlice";

export default configureStore({
  reducer: {
    jugglingTrick: jugglingTrickReducer,
  },
});

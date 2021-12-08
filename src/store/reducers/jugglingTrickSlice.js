import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import threeBallTricks from "../../assets/json/jugglingTricks/ThreeBallTricks.json";
import fourBallTricks from "../../assets/json/jugglingTricks/FourBallTricks.json";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import axios from "axios";

export const fetchJugglingTricksData = createAsyncThunk(
  "jugglingTricks/fetchJugglingTricksData",
  async () => {
    const { data } = await axios.get(`${API_URL}/api/v1/tricks/getAll`);
    return data;
  }
);

export const jugglingTricksSlice = createSlice({
  name: "jugglingTricks",
  initialState: {
    loading: null,
    threeBall: null || threeBallTricks,
    fourBall: fourBallTricks,
  },
  reducers: {
    addThreeBallTrick(state, action) {
      state.threeBall.push(action.payload);
    },
    addFourBallTrick(state, action) {
      state.fourBall.push(action.payload);
    },
  },
  extraReducers: {
    [fetchJugglingTricksData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchJugglingTricksData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.threeBall = payload;
    },
    [fetchJugglingTricksData.rejected](state, { payload }) {
      state.loading = HTTP_STATUS.REJECT;
      //could add static here
    },
  },
});

export const { addThreeBallTrick, addFourBallTrick } =
  jugglingTricksSlice.actions;

export default jugglingTricksSlice.reducer;

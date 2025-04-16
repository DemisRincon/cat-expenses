import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";

interface CatFactState {
  fact: string;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: CatFactState = {
  fact: "A cat's jaw has only up and down motion; it does not have any lateral, side to side motion, like dogs and humans.",
  status: "idle",
};

interface CatFactResponse {
  fact: string;
  length: number;
}

export const fetchRandomCatFact = createAsyncThunk<string>(
  "catFact/fetchRandomCatFact",
  async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data: CatFactResponse = await response.json();
    return data.fact;
  }
);

export const catFactSlice = createSlice({
  name: "catFact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomCatFact.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchRandomCatFact.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = "succeeded";
          state.fact = action.payload;
        }
      )
      .addCase(fetchRandomCatFact.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default catFactSlice.reducer;

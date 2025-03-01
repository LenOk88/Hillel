import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacter = createAsyncThunk(
  "character/fetchCharacter",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
      const character = response.data;

      const filmRequests = character.films.map((url) => axios.get(url));
      const filmResponses = await Promise.all(filmRequests);
      character.films = filmResponses.map((res) => res.data.title);

      const starshipRequests = character.starships.map((url) => axios.get(url));
      const starshipResponses = await Promise.all(starshipRequests);
      character.starships = starshipResponses.map((res) => res.data.name);

      return character;
    } catch (error) {
      return rejectWithValue("Ошибка загрузки данных!");
    }
  }
);

const characterSlice = createSlice({
  name: "character",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearCharacter: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCharacter } = characterSlice.actions;
export default characterSlice.reducer;
